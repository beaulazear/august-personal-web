# Viafoura Demo Publisher Site

Static test pages for Viafoura engagement products, hosted inside the portfolio site. Each page is a short implementation guide (what the product is, code snippets, configuration options) followed by a live, working widget.

**Live URL:** https://www.beaulazear.com/viafoura-demo/

## How it's hosted

These are plain HTML files in the React app's `public/` folder. Create React App copies them verbatim into the build, so `npm run deploy` (GitHub Pages, custom domain from `public/CNAME`) publishes them alongside the portfolio. No build step or framework is involved.

## Hosting requirements

Viafoura widgets only load when:

1. **Correct domain:** the page is served from the domain configured in the Viafoura site settings (`www.beaulazear.com`)
2. **HTTPS**
3. **Not localhost / 127.0.0.1**
4. **Not `file://`**

`assets/site.js` shows a yellow warning banner when any of these fail, so testing locally will show the banner and no widgets.

## Site configuration

| Setting | Value | Where it's used |
|---------|-------|-----------------|
| Site name | `Beau's Viafoura Implementation` | Header brand on every page |
| Approved domain | `www.beaulazear.com` | `og:url` meta tags, `approvedDomain` in `assets/site.js` |
| Path | `/viafoura-demo/` | `og:url` meta tags |
| Container ID prefix | `P` | `vf:container_id` meta tags |

## Pages and products

| Page | Widget(s) | Container ID | Notes |
|------|-----------|--------------|-------|
| `index.html` | none | none | Redirects to `conversations.html` |
| `conversations.html` | `<vf-conversation-starter>` + `<vf-conversations>` | `P1001` | Toggle between below-article and slide-in side-tray layouts |
| `live-blog.html` | `<vf-live-blog>` | `P1002` | Posts are created in the Viafoura admin / API |
| `live-qa.html` | `<vf-livequestions>` | `P1003` | `title` attribute controls the header |
| `live-chat.html` | `<vf-livechat>` | `P1004` | Wrapper needs an explicit height (550px here) |
| `polls.html` | `<vf-poll>` | `P1006` | Poll is configured by an admin/moderator on the page |
| `reviews.html` | `<vf-rating>` + `<vf-livereviews>` | `P2001` | Rating summary + review list |
| `community.html` | `<vf-conversations-count>`, `<vf-trending-articles>`, share bar, share count, `<vf-topic-follow>`, `<vf-conversations>` | `P1007` (counts use `P1001`, `P3001`–`P3003`) | The Additional Components: counts, trending, sharing, follows, featured comments and badges |
| `spa.html` | `<vf-conversations>` | `P3001`, `P3002`, `P3003` | Client-side article switching with `vf.context.update()` |

Every page also includes the notification tray trigger and the SDK.

## File structure

```
viafoura-demo/
├── assets/
│   ├── site.js                 # Helper: og:url fallback, domain check banner, VF Events debug panel
│   └── styles.css              # Minimal site styles
├── index.html                  # Redirect to conversations.html
├── conversations.html
├── live-blog.html
├── live-qa.html
├── live-chat.html
├── polls.html
├── reviews.html
├── community.html
├── spa.html
└── README.md
```

## Integration basics

Every page follows the same pattern:

```html
<head>
  <!-- Container ID for this page's content -->
  <meta name="vf:container_id" content="P1001">
  <meta property="og:url" content="https://www.beaulazear.com/viafoura-demo/conversations.html">
  <meta property="og:title" content="...">
</head>
<body>
  <div class="viafoura">
    <vf-conversations></vf-conversations>
  </div>

  <!-- Required for login, notifications, replies -->
  <div class="viafoura">
    <vf-tray-trigger floating="true"></vf-tray-trigger>
  </div>

  <script async src="https://cdn.viafoura.net/entry/index.js"></script>
</body>
```

A widget can also take an explicit container ID instead of reading the meta tag:

```html
<vf-conversations vf-container-id="P1001"></vf-conversations>
```

## Widget reference

These are the tags used on the live pages:

```html
<!-- Conversations -->
<vf-conversations></vf-conversations>
<vf-conversations limit="20" reply-limit="5" sort="most-liked" initial-height="600"></vf-conversations>

<!-- Live Blog -->
<vf-live-blog></vf-live-blog>

<!-- Live Q&A -->
<vf-livequestions></vf-livequestions>
<vf-livequestions title="AMA"></vf-livequestions>   <!-- title="" hides the header -->

<!-- Live Chat (give the wrapper a height) -->
<div class="viafoura" style="height: 550px;">
  <vf-livechat></vf-livechat>
</div>

<!-- Polls -->
<vf-poll></vf-poll>
<vf-poll vf-container-id="poll-product-feedback"></vf-poll>

<!-- Ratings & Reviews -->
<vf-rating></vf-rating>
<vf-livereviews></vf-livereviews>

<!-- Notification tray -->
<vf-tray-trigger floating="true"></vf-tray-trigger>
```

## SPA integration pattern

When content changes without a full page reload, update the Viafoura context:

```javascript
window.vfQ = window.vfQ || [];
window.vfQ.push(function() {
  window.vf.context.update({
    container_id: 'NEW_CONTAINER_ID',
    url: window.location.href,
    title: 'New Article Title',
    tags: ['tag1', 'tag2'],
    section_ids: ['section-id']
  });
});
```

`spa.html` also handles deep links (`spa.html?article=article-2`): before the SDK script is parsed, it rewrites the `vf:container_id`, `og:title` and `og:url` meta tags to match the article in the URL, so the SDK boots with the right container. Back/forward navigation is handled with `pushState` / `popstate`.

## Debug tools

### VF Events panel (bottom-left)

`assets/site.js` adds a collapsible panel to every page that:

- Logs the page's `container_id` and `og:url` on load
- Subscribes to common Viafoura event channels (authentication, user, comment, liveblog, livechat, tray, topics, ads, …) and logs each event with its payload
- Has **Log Page** / **Log User** buttons (`vf.context.get('page' | 'user')`) and **Clear**
- Exposes `window.hlLog(message, data)` for page scripts (used by `spa.html` to log navigation)

### Browser console

```javascript
window.vf;                         // SDK loaded?
window.vf.context.get('page');     // current page context
window.vf.context.get('user');     // current user context
window.vf.$subscribe('comment', 'created', function(data) {
  console.log('Comment created:', data);
});
```

## Suggested testing order

1. **`conversations.html`**: post, reply, react; try the side-tray layout toggle
2. **`reviews.html`**: rate, write a review, mark reviews helpful
3. **`polls.html`**: vote (or configure the poll as admin/moderator)
4. **`live-blog.html`**: publish posts from the Viafoura admin and watch them appear
5. **`live-chat.html`**: open in two tabs to see messages arrive in real time
6. **`live-qa.html`**: submit and upvote questions
7. **`community.html`**: check counts and trending fill in after commenting elsewhere, share the page, follow the topic and author, feature a comment as a moderator
8. **`spa.html`**: switch articles, use back/forward, and open a deep link like `spa.html?article=article-3`

## Notes on the official docs

Things to watch for when copying from https://documentation.viafoura.com:

- **Curly quotes:** some snippets contain typographic (curly) quotes instead of straight `"` quotes. They break HTML attributes and JavaScript when pasted, so retype them as straight quotes.
- **Live Chat React syntax:** some Live Chat examples show a React/JSX component. For plain HTML, use the `<vf-livechat></vf-livechat>` web component.

When in doubt, the markup on these pages is known to work.

## Deployment checklist

- [ ] Domain matches the Viafoura site configuration (`www.beaulazear.com`)
- [ ] HTTPS is enabled
- [ ] Every widget loads (no yellow banner, events appear in the debug panel)
- [ ] Container IDs are unique per piece of content
- [ ] `og:url` / `og:title` meta tags are correct on each page
- [ ] SPA page: article switching, back/forward, and deep links all load the right container
- [ ] Mobile layout checked
- [ ] Moderation settings reviewed in the Viafoura admin

## Resources

- **Viafoura documentation:** https://documentation.viafoura.com
- **Polls user guide:** https://documentation.viafoura.com/docs/poll-guide
