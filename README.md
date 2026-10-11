# Personal Portfolio — Freelance Web Developer

A lightweight, responsive one-page portfolio for a beginner freelance web
developer. Built with plain **HTML, CSS, and vanilla JavaScript** — no
frameworks, build tools, dependencies, or backend.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and all content (semantic HTML). |
| `style.css` | Theme, layout, and responsive styles. |
| `script.js` | Mobile menu, scroll reveals, footer year. |
| `assets/img/` | Project screenshots shown in the Work section. |
| `README.md` | This document. |

## Running it

No build step. Just open `index.html` in a browser.

Optional local server (any one of these):

```bash
# Python
python -m http.server 8000

# Node (if installed)
npx serve .
```

Then visit `http://localhost:8000`.

## What's included

- **Sticky header** with responsive navigation and an accessible mobile menu.
- **Hero** with the headline “I build clean, modern websites for small businesses.”
- **Selected projects** — two projects shown with screenshots: a corporate site
  for a fuel-equipment company and a landing page for a beauty-booking product.
- **Services** — one-page websites, responsive design, small website improvements.
- **Process** — Discuss → Build → Review.
- **About** — a short, honest introduction.
- **Contact** — working `mailto:` link to the address in `index.html`.
- **Footer** with navigation and an auto-updating year.

## Details to check

1. **Name** — set to `Saveliy` (brand, about, and footer) with an `S` brand
   mark. Update it anywhere if you change the name.
2. **Email** — set to `stupapupa228777@gmail.com` (contact button and its
   `mailto:` link).
3. **Project screenshots** — the two files in `assets/img/`. Swap them for new
   shots any time; keep the same file names or update the `src` values in
   `index.html`. If you add live project links, wrap each `.project-shot` image
   in an `<a href="…">` and give it an accessible name.
4. **Page title / meta description** in `<head>`.

> The two project entries show real screenshots. Confirm the names, the
> descriptions, and the "Built with" tags match the actual work before
> publishing.

## Accessibility & performance notes

- Semantic landmarks (`header`, `main`, `section`, `nav`, `footer`) with
  `aria-labelledby` on each section.
- Visible keyboard focus via `:focus-visible`, plus a “Skip to content” link.
- Mobile menu uses `aria-expanded` / `aria-controls`, closes on link tap and on
  `Escape` (returning focus to the toggle), and reset when resizing to desktop.
  Hidden links are kept out of the tab order with `visibility`.
- Scroll animations respect `prefers-reduced-motion`; content is still shown if
  JavaScript is disabled (a `.js` class gates the hidden state).
- No horizontal overflow: `overflow-x: clip` on the body, fluid type with
  `clamp()`, and `minmax(0, 1fr)` grid tracks.
- Project screenshots ship with explicit `width`/`height` (no layout shift),
  `loading="lazy"`, and descriptive `alt` text.
- No external requests — no web fonts, icon packs, or trackers.

## Manual tests to run

**Navigation**
- Click each header link (Work, Services, Process, About) and confirm it scrolls
  to the right section without the sticky header covering the heading.
- Click **Start a project** / **Get in touch** → jumps to Contact.
- Click **View my work** → jumps to Work.
- Click the contact email button → opens your mail client (`mailto:`).

**Mobile menu (narrow the window to < 820px)**
- Tap the hamburger → menu opens; the icon turns into an X.
- Tap a link → menu closes and the page scrolls.
- Press `Escape` while open → menu closes and focus returns to the button.
- `Tab` through the page while the menu is closed → hidden links are skipped.
- Resize back to desktop while the menu is open → menu resets.

**Responsiveness**
- Check widths: ~320px, 375px, 768px, 1024px, 1440px.
- Confirm there is **no horizontal scrollbar** and nothing is clipped.
- Confirm tap targets are comfortably large on touch screens.

**Keyboard & accessibility**
- `Tab` from the top → “Skip to content” appears first and works.
- Every interactive element shows a visible focus outline.
- Project screenshots → both images load, keep a consistent 16:10 frame, and
  never overflow the card or cause a horizontal scrollbar.

**Reduced motion**
- Enable “Reduce motion” in your OS settings and reload.
- Sections should appear without the fade/slide, and links scroll instantly.

**Content honesty**
- Confirm no fake testimonials, clients, or statistics are present.
- Confirm the email and name are still obvious placeholders before publishing.
