# Oshae Alexis Portfolio

A polished one-page static portfolio for Oshae Alexis, built with plain HTML and CSS for job applications in support engineering, technical solutions, implementation consulting, customer solutions, and platform operations.

## Files

- `index.html` contains the page content and minimal mobile navigation JavaScript.
- `styles.css` contains the full responsive visual system and layout.
- `assets/Oshae-Alexis-Resume.pdf` is the resume linked from the navigation and hero.

## Local Preview

Open `index.html` directly in a browser, or run a tiny static server from this folder:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Add `index.html`, `styles.css`, `script.js`, the `assets` folder, and this `README.md`.
3. Push the files to the repository.
4. In GitHub, open `Settings` > `Pages`.
5. Set the source to the main branch and root folder.
6. Save and wait for GitHub Pages to publish the site.

## Deploy to Vercel

1. Create a new Vercel project.
2. Import the GitHub repository.
3. Leave the framework preset as `Other` or static.
4. Deploy with the project root as the output directory.

No build command is required.
