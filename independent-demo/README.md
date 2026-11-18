# The Independent × Viafoura: Conversations placement mock

A copy of a current independent.co.uk article page (Nov 2026 design) with **Viafoura Conversations** set up the way the Independent runs it today. It's the Viafoura counterpart to the OpenWeb placement mock.

**Live URL (after `npm run deploy`):** https://www.beaulazear.com/independent-demo/

## What's on the page

| Part | Notes |
|------|-------|
| Masthead, nav, article header, hero, sidebar | Rebuilt from the live article "Is the AI bubble going to burst?" (6 Nov 2026). Logo SVGs taken from the live page; article images are hotlinked from `static.the-independent.com`. Indy Sans/Serif are swapped for Source Sans 3 / Source Serif 4. |
| Byline **Comments** button | Links to `#comments-area` and shows `<vf-conversations-count>`, matching the live site. |
| "Join our commenting forum" box | Sits directly above the comments, as on the live page. |
| Conversations | The Independent's live markup: `#comments-area` anchor, then `.viafoura#viafoura-conversation-id` containing `vf-tray-trigger` + `vf-tray vf-feature-unity="true"` + `<vf-conversations limit="10">`, in a 600px box with a fade and **Show more**. |
| Widget styling | Three switchable variants; see **Styling variants** below. |

## Styling variants

The **Styling** switch in the demo bar swaps the Viafoura CSS without a reload. The choice is saved, and you can link straight to one with `?style=default`, `?style=current` or `?style=recommended` (the default).

| Variant | Stylesheet | What it shows |
|---------|-----------|---------------|
| **No CSS** | none | Viafoura's stock look: Inter, Viafoura blue, white background |
| **Indy today** | `assets/indy-viafoura.css` | The Independent's live CSS, copied from their page (class renamed to `.indy-vf`). Uses about 60 deep selectors into widget internals, `display:none` and a `visibility:hidden` heading swap, which Viafoura doesn't support long term |
| **Recommended** | `assets/viafoura-recommended.css` | Our proposal: their look using only documented customizations, ready to hand to the partner |

The recommended CSS, mapped to the docs:

- **Font family** (`--primary-font`): Indy Sans, falling back to Source Sans 3 in this mock
- **Font sizes** (`--x-large-font` … `--x-small-font`): 24px heading and 16px comments, matching their current comment styles
- **Colour overrides**: Independent red (`#eb1426`) as the accent; their ink and greys for text and neutrals; their link blue for @mentions; site green and maroon for success and error; Premium maroon for Editor's Pick
- **Background colour islands**: the comment list on their `#f7f7f7` wash, with dropdowns and tooltips kept white
- **Default avatar colours**: all 16 slots mapped to the Independent palette
- **Custom badges**: an example `.vf-custom-badge--premium` for Independent Premium subscribers

Things left out on purpose, per Viafoura's best practices: `!important`, tag selectors, `display:none` on widget elements, and replacing the "Conversations" heading text. Viafoura also recommends placing `<vf-tray>` directly in `<body>`. The Independent nests it in the comments wrapper, and this mock keeps their markup.

## Configuration

| Setting | Value |
|---------|-------|
| Container ID | `P4001` (meta tag `vf:container_id`) |
| `og:url` | `https://www.beaulazear.com/independent-demo/index.html` |
| Approved domain | `www.beaulazear.com` (same Viafoura site as `/viafoura-demo/`) |

The widgets don't load on `localhost` or `file://`. Locally you'll see the layout and a loading skeleton where the comments go.


The page has `noindex` set and a demo bar and footer saying it's a mock and not affiliated with The Independent.
