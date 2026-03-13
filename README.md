# Pratima Baral · Portfolio

A minimal, modern portfolio site for showcasing the work of **Pratima Baral** – a data and UX professional with experience in ICT, digital agriculture, and education.

For now this is a single-page portfolio. It is intentionally structured so that a blog section can be added later (e.g. by adding a `/blog` folder with static posts or wiring this into a static site generator).

## Running locally

You have two easy options:

- **Option 1 – Open directly**  
  Open `index.html` in your browser (double-click it in Finder, or use “Open with Browser” in your editor). No tooling required.

- **Option 2 – Simple local server**  
  If you have Node.js installed:

  ```bash
  npm install -g serve   # if you don't already have it
  serve .
  ```

  Then open the printed `http://localhost:XXXX` URL in your browser.

## Customising content

Most content lives in:

- `index.html` – sections (hero, experience, projects, skills, education, contact)
- `styles.css` – layout, colours, typography, animations
- `script.js` – small enhancements (smooth scroll, mobile navigation, dark/light theme toggle, dynamic year)

To adapt this into a blog in future, you can:

- Add a **Blog** link to the navigation
- Create a `blog/` folder and simple HTML pages for posts, or
- Migrate this structure into a framework like Next.js or Astro and use markdown/MDX for posts

