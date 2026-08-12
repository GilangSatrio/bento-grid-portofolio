# Gilang Satrio — Personal Portfolio

Modern static portfolio website for **Gilang Satrio**, featuring robotics, IoT, mechatronics, and industrial automation work.

## Run locally

This project has no build step or package dependencies.

Open [index.html](index.html) directly in a browser, or use a local static server:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Main features

- Responsive 12-column Bento Grid layout
- Dark/light theme with saved preference
- English/Indonesian language switch with saved preference
- Interactive professional-experience panel
- Infinite multi-row tools marquee, pausing on hover
- Featured-project carousel with touch and keyboard support
- Project detail template with video/photo carousel
- Contact form set up through FormSubmit
- Responsive mobile navigation and footer

## Project structure

```text
├── index.html                    # Main portfolio page
├── styles.css                    # Base design and components
├── interactions.css              # Bento layout and interaction overrides
├── app.js                        # Main interactions, language, carousel, form
├── experience.js                 # Experience panel content and interactions
├── nav.js                        # Homepage navigation language indicator
├── contact-form.js               # FormSubmit contact form setup
├── assets/
│   ├── Gilang-Satrio-CV.pdf      # Add your CV here (optional fallback)
│   └── gilang-satrio.jpg         # Add your portrait here
└── projects/
    ├── project-template.html     # Detail-page template for a real project
    ├── project-template.css      # Project page styles
    └── project-template.js       # Media carousel, theme, language switch
```

## Update profile photo

Add a professional portrait at:

```text
assets/gilang-satrio.jpg
```

The site automatically displays the image in the profile card. Until it is added, it shows the `GS` initials fallback.

## Update contact links

Contact links are in [index.html](index.html), inside the `#contact` section.

- Email: `gilangsjw@gmail.com`
- LinkedIn: `linkedin.com/in/gilang-satrio`
- GitHub: `github.com/GilangSatrio`
- Instagram: `instagram.com/gilangsjr/`

## Contact form

The form submits to FormSubmit and sends messages to `gilangsjw@gmail.com` without opening the visitor's mail application.

On the first real form submission, FormSubmit sends an activation email to the receiving inbox. Confirm it once to enable future submissions.

The configuration is applied in [contact-form.js](contact-form.js).

## Download CV

The resume download button currently points to:

```text
assets/Gilang-Satrio-CV.pdf
```

To use a Google Drive file instead, change the `href` of the Resume button in [index.html](index.html) to a public Google Drive download link, for example:

```html
<a href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID">Download Resume</a>
```

Make sure the Google Drive file sharing setting is **Anyone with the link**.

## Add a real project

1. Copy the `projects/project-template.html`, `.css`, and `.js` files to a new project name.
2. Replace all placeholder text with verified project information.
3. Replace the media placeholder slides with project photos or a video embed.
4. Add the project to the `projects` array in [app.js](app.js).
5. Set the project link in the `renderProjects()` function to the new detail page.

Only publish technical details, results, images, and client information that are approved for public sharing.

## Theme and language

Theme and language preferences are persisted in browser `localStorage`:

- `gs-theme`: `dark` or `light`
- `gs-lang`: `en` or `id`

Translations for the main page are in `app.js`. Project-template translations are in `projects/project-template.js`.

## Deployment

Because this is a static site, deploy the whole repository to GitHub Pages, Netlify, Vercel static hosting, Cloudflare Pages, or any standard web host. No build command is needed.
