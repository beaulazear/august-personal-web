# Viafoura Demo Publisher Site

This demo site showcases Viafoura engagement products integrated into a realistic publisher website. Each page demonstrates different widgets and integration patterns.

## Placeholders

Before deploying, replace these placeholders throughout all files:

| Placeholder | Example Value | Description |
|-------------|---------------|-------------|
| `Beau Test Site` | `Tech Daily News` | Your publication name |
| `www.beaulazear.com` | `www.beaulazear.com` | Domain configured in Viafoura |
| `/viafoura-demo/` | `/viafoura-demo/` | Path where demo is hosted |
| `P` | `P` or `techblog_` | Prefix for container IDs |

**Example:**
- Before: `<meta name="vf:container_id" content="P1001">`
- After: `<meta name="vf:container_id" content="P1001">`

## Hosting Requirements

**Critical:** Viafoura widgets will only load when:

1. **Correct domain:** The site must be hosted on the domain configured in your Viafoura settings
2. **HTTPS:** Viafoura requires HTTPS (exception: Viafoura may allow HTTP for testing in some configurations)
3. **Not localhost:** Viafoura does not support `localhost` or `127.0.0.1`
4. **Not file://:** Cannot run from local file system

The included `site.js` helper will display a warning banner if these conditions are not met.

## Pages and Products

| Page | Products Demonstrated | Container ID(s) | Description |
|------|----------------------|-----------------|-------------|
| `index.html` | Trending, Tray | None (home page) | Home page with article cards and trending content |
| `article.html` | Conversations, Tray | `P1001` | Standard article with comments |
| `live-blog.html` | Live Blog, Tray | `P1002` | Real-time event coverage |
| `live-qa.html` | Live Q&A, Polls, Conversations, Tray | `P1003`, `Ppoll1003` | Interactive Q&A with poll |
| `live-chat.html` | Live Chat, Tray | `P1004` | Real-time chat for events |
| `reviews.html` | Ratings & Reviews, Tray | `P2001` | Product review with user ratings |
| `spa.html` | Conversations, Tray + SPA pattern | `P3001`, `P3002`, `P3003` | Dynamic content loading demo |
| `custom-auth.html` | Conversations, Tray + Custom auth | `P1005` | Authentication integration demo |

**Note:** Replace `P` with your chosen `P` value.

## File Structure

```
viafoura-demo/
├── assets/
│   ├── site.js          # Helper script (domain check, debug panel)
│   └── styles.css       # Site styles
├── index.html           # Home page
├── article.html         # Article with Conversations
├── live-blog.html       # Live Blog
├── live-qa.html         # Live Q&A + Poll
├── live-chat.html       # Live Chat
├── reviews.html         # Ratings & Reviews
├── spa.html             # SPA navigation demo
├── custom-auth.html     # Custom authentication demo
└── README.md            # This file
```

## Suggested Testing Order

1. **Start with `index.html`:** Get familiar with the site structure and navigation
2. **Test `article.html`:** Verify basic Conversations widget works (post comment, reply, reactions)
3. **Try `reviews.html`:** Test Ratings & Reviews (write review, rate product, mark helpful)
4. **Explore `live-blog.html`:** See real-time updates (content created via Viafoura CMS)
5. **Test `live-chat.html`:** Real-time messaging (open in multiple tabs to see live updates)
6. **Try `live-qa.html`:** Submit questions, vote, participate in poll
7. **Test `spa.html`:** Verify context updates when switching articles
8. **Test `custom-auth.html`:** Understand authentication integration pattern

## Debug Tools

### VF Events Panel (Bottom-Left)

Every page includes a debug panel that shows Viafoura events in real-time:

- **VF Events:** Expandable panel showing all Viafoura SDK events
- **Log Page:** Button to log current page context
- **Log User:** Button to log current user context
- **Clear:** Clear the event log

This is useful for:
- Verifying widgets are loading correctly
- Debugging authentication flows
- Monitoring SPA navigation
- Understanding event sequences

### Browser Console

For deeper debugging:

```javascript
// Check if Viafoura SDK is loaded
console.log(window.vf);

// Get current page context
window.vf.context.get('page');

// Get current user context
window.vf.context.get('user');

// Subscribe to specific events
window.vf.$subscribe('comment', 'created', function(data) {
  console.log('Comment created:', data);
});
```

## Widget Syntax Reference

All widgets use straight quotes (never curly quotes):

### Conversations
```html
<vf-conversations></vf-conversations>
```

### Live Blog
```html
<vf-liveblog></vf-liveblog>
```

### Live Chat
```html
<vf-livechat></vf-livechat>
```

### Live Q&A
```html
<vf-qa></vf-qa>
```

### Polls
```html
<vf-polls container-id="P1003"></vf-polls>
```

### Ratings & Reviews
```html
<vf-ratings-and-reviews></vf-ratings-and-reviews>
```

### Trending
```html
<vf-trending></vf-trending>
```

### Tray Trigger
```html
<vf-tray-trigger floating="true"></vf-tray-trigger>
```

## SPA Integration Pattern

When changing content dynamically (without full page reload), always update Viafoura context:

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

See `spa.html` for a complete working example.

## Custom Authentication Pattern

To integrate with your existing auth system:

1. **Listen for authentication needed:**
```javascript
window.vf.$subscribe('authentication', 'needed', function(data) {
  // Show your login UI
  showLoginDialog();
});
```

2. **After successful login, pass user to Viafoura:**
```javascript
window.vf.session.login({
  user_id: 'unique_user_id',
  name: 'Display Name',
  email: 'user@example.com',
  user_token: 'JWT_TOKEN_FROM_YOUR_BACKEND'
});
```

3. **Handle logout:**
```javascript
window.vf.session.logout();
```

See `custom-auth.html` for a complete working example.

## Known Documentation Issues

As of November 2026, the official Viafoura documentation at https://documentation.viafoura.com has these known issues:

### 1. Curly Quotes in Code Snippets

**Problem:** Many code examples use curly quotes (`"` and `"`) instead of straight quotes (`"`), which will cause JavaScript syntax errors.

**Example from docs (WRONG):**
```html
<vf-conversations></vf-conversations>
```

**Correct syntax:**
```html
<vf-conversations></vf-conversations>
```

**Fix:** When copying code from the docs, manually replace all curly quotes with straight quotes.

### 2. Live Chat Widget Syntax

**Problem:** The docs show React/JSX syntax for Live Chat instead of web component syntax.

**Example from docs (WRONG for vanilla HTML):**
```jsx
<LiveChat />
```

**Correct syntax for HTML:**
```html
<vf-livechat></vf-livechat>
```

**Fix:** Use `<vf-livechat></vf-livechat>` for vanilla HTML/JavaScript implementations. The React syntax is only for React applications.

### Verification

All code in this demo site uses correct syntax with straight quotes and proper web component tags. When in doubt, refer to the examples in these demo files rather than copying directly from the documentation.

## Additional Resources

- **Viafoura Documentation:** https://documentation.viafoura.com
- **Support:** Contact your Viafoura account representative
- **This Demo:** All files include detailed comments explaining the integration

## Deployment Checklist

Before deploying to production:

- [ ] Replace all `{{PLACEHOLDER}}` values with actual values
- [ ] Verify domain matches Viafoura configuration
- [ ] Ensure HTTPS is enabled
- [ ] Test all widgets load correctly
- [ ] Verify container IDs are unique across pages
- [ ] Test authentication flow (if using custom auth)
- [ ] Check mobile responsiveness
- [ ] Verify Open Graph tags for social sharing
- [ ] Test browser back/forward buttons (especially on SPA page)
- [ ] Review moderation settings in Viafoura dashboard

## License

This demo site is provided as-is for educational and testing purposes.
