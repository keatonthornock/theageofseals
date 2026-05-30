# The Age of Seals Landing Page

A polished static landing page for **The Age of Seals**, an epic fantasy trilogy suitable for GitHub Pages or any static host. The site uses plain HTML, CSS, and vanilla JavaScript—no build tools or dependencies are required.

## Files

- `index.html` — semantic landing page markup and content sections.
- `assets/css/styles.css` — responsive styling, theme variables, parchment textures, torn-edge dividers, and placeholder art styles.
- `assets/js/main.js` — mobile navigation, FAQ accordion, and newsletter form interaction.
- `assets/img/hero-placeholder.png` — abstract medieval-fantasy hero placeholder PNG.

## Local Preview

Open `index.html` directly in a browser, or serve the directory locally:

```bash
python3 -m http.server 4173
```

Then visit `http://127.0.0.1:4173/`.

## Replacing Placeholder Images

### Hero Artwork

The hero background currently points to:

```css
assets/img/hero-placeholder.png
```

To replace it with final concept art:

1. Add your image to `assets/img/`, for example `assets/img/hero-final.jpg`.
2. Open `assets/css/styles.css`.
3. Find the `.hero-bg` rule and replace the URL:

```css
background: url('../img/hero-final.jpg') center / cover no-repeat;
```

Large cinematic images work best when they are at least 1800px wide and have darker space near the center for title readability.

### Book Covers

The book covers are CSS gradient placeholder blocks inside `.book-cover` elements. When final cover images are available, either:

- Replace each `.book-cover` block in `index.html` with an `<img>` element, or
- Add background images to `.cover-one`, `.cover-two`, and `.cover-three` in `assets/css/styles.css`.

Example:

```css
.cover-one {
  background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.65)), url('../img/book-one-cover.jpg') center / cover no-repeat;
}
```

### Character Portraits

The character cards use CSS silhouette placeholders. Add portrait files to `assets/img/` and update the `.portrait-*` classes in `assets/css/styles.css` with `background-image` values when final art is ready.

## Customizing Text

All visible copy is in `index.html`. Search for section IDs such as `#books`, `#world`, `#characters`, and `#faq` to update headings, descriptions, calls to action, and footer links.

## Deployment on GitHub Pages

Because this is a static site, GitHub Pages can serve it directly from the repository root. Configure Pages to deploy from the current branch and root folder, then visit the generated Pages URL.
