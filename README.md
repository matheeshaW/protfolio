# Matheesha Weerakoon — Portfolio

A modern, responsive personal portfolio built with React and Vite. It showcases skills, projects, and contact details with clean UI, smooth animations, and a mobile-first layout.

## Features

- Responsive layout optimized for mobile and desktop
- Animated hero section with glitch effect
- Skills grouped by category with tech logos
- Project cards with hover effects and tech stack badges
- Contact section with a clean form layout

## Tech Stack

- React
- Vite
- CSS (custom, no UI frameworks)

## Getting Started

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build for production:

```
npm run build
```

Preview the production build:

```
npm run preview
```

## Content & Customization
You can use this as a template if you want by simply editing the data.js file.
All content lives in [src/data.js](src/data.js). Update your name, bio, skills, and projects there.

### GitHub Pages base URL

view the page live on https://matheeshaw.github.io/portfolio/

This project uses import.meta.env.BASE_URL for assets so they load correctly on GitHub Pages. Keep the base path updated in [vite.config.js](vite.config.js) if your repo name changes.


### Profile Image

- Placeholder: public/profile/profile-placeholder.svg
- Replace with your image and update the path in [src/data.js](src/data.js) if needed.

### Project Images

- Placeholder: public/projects/project-placeholder.svg
- Add your images to public/projects and update each project image path in [src/data.js](src/data.js).

### CV

- Place your CV at public/cv/W.M.M.B.-WEERAKOON-CV.pdf (or update the path in [src/data.js](src/data.js)).

### Favicon

- Custom icon: public/mw.svg
- Linked in [index.html](index.html).

## License

This project is for personal portfolio use.
