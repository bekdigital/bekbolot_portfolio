# Bekbolot Tolomushov: Portfolio

A one-page personal portfolio built with **React + Vite + Tailwind CSS**, in English and Russian, with light and dark themes.

## Run it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install      # first time only
npm run dev      # start the dev server at http://localhost:5173
```

Other commands:

```bash
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

## Edit your content

**All text lives in `src/data/content.js`.** You don't need to touch the components.

- Text in two languages is written as `{ en: '...', ru: '...' }`.
- To add a job, course, skill or project, copy an existing item in its list and edit it.
- Education has two parts: `education` (academic: names in the original language, English and Russian, photo, study period, publication) and `training` (courses & certificates).
- Jobs use `MM/YYYY` dates. Leave `end: ''` for a current job ("present").
- A project with `url: ''` shows "Details coming soon".

## Files to replace

| What | Where |
|---|---|
| Professional photo | Replace `public/profile.jpg` (square, at least 512×512 px). |
| CV | Replace `public/Bekbolot_Tolomushov_CV.pdf` (keep the same file name). |
| School photos | Files in `public/education/`; set `image` and `imageCredit` for each school in `education` in `content.js`. |
| Project links and images | `projects` in `content.js` (`url`, and optionally `image`, e.g. `/projects/alchik.jpg` in `public/projects/`). |
| Website address | The `canonical`, `og:url` and `og:image` URLs in `index.html` after you deploy. |
| Social preview image (optional) | `public/og-image.png` (1200×630 px). |

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com), choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically (build command `npm run build`, output folder `dist`). Click **Deploy**.
4. Optionally add your own domain under **Settings → Domains**, then update the URLs in `index.html`.

Every push to the main branch redeploys the site automatically.

Alternatively, use the CLI: `npm i -g vercel`, then run `vercel` in this folder.

## Project structure

```
index.html              SEO meta tags, Open Graph, favicon, theme script
public/                 favicon, photo, CV PDF, social image, robots.txt
src/data/content.js     ← ALL content (EN + RU)
src/context/            language + theme state (t() picks the right language)
src/hooks/              scroll-reveal and active-section helpers
src/components/         Navbar, Footer, Section, Reveal, icons, mountains
src/sections/           one file per page section (Education also holds the courses list)
src/index.css           Tailwind, shared styles, animations, print styles
tailwind.config.js      colours (navy + UN blue accent) and font
```

## Features

- Responsive (mobile first), sticky navigation with active-section highlight
- Light/dark mode (remembers the visitor's choice; follows the system setting by default)
- English/Russian switcher (remembers the choice)
- Accessible: semantic landmarks, skip link, keyboard-friendly expandable timeline, visible focus rings, ARIA labels, reduced-motion support
- Print-friendly: printing the page (Ctrl/Cmd + P) gives a clean black-on-white CV with all jobs expanded
- Contact form opens the visitor's email app (`mailto:`), so no backend is needed
