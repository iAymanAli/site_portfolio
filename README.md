# Personal Portfolio

A responsive personal portfolio for me. The site introduces me, showcases my projects, shares background and interests, and links to his online profiles.

## Features

- **Home page:** Introduction, a preview of the three featured projects, and a short About preview.
- **Projects page:** Project cards linking to my repositories.
- **About page:** Education, skills, Taekwondo, interests, and career aspirations.
- **Accounts page:** Cards linking to social, professional, and coding profiles.
- **Light and dark themes:** The selected theme is saved in browser `localStorage`.
- **Responsive layout:** Navigation, project cards, and page content adapt to smaller screens.
- **Accessible interactions:** Semantic page structure, labels for icon-only controls, and visible keyboard focus styles.

## Technologies

- **React 19** for the component-based interface.
- **Vite 8** for local development and production builds.
- **React Router** for client-side page navigation.
- **CSS Modules** for component- and page-specific styles, with shared design and layout rules in `src/App.css` and global resets in `src/index.css`.
- **ESLint** with React, React Hooks, React Refresh, and import checks.
- **React Compiler** configured through the Vite React and Babel plugins.

## Getting started

1. Clone the repository
```bash
git clone https://github.com/iAymanAli/my_portfolio.git
```
2. Install a current Node.js LTS release and npm, then run:

```bash
npm install
npm run dev
```

Vite prints a local URL in the terminal (normally `http://localhost:5173`). Open it in a browser to view the site. The development server supports hot module replacement.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run lint` | Run ESLint across the project. |
| `npm run build` | Create the optimized production build in `dist/`. |
| `npm run preview` | Serve the production build locally after building. |

## Project structure

```text
.
├── public/                         # Public static files served from the site root
├── src/
│   ├── assets/                     # Logo and other imported image assets
│   ├── components/
│   │   ├── Footer/                 # Site footer and its CSS Module
│   │   ├── Navbar/                 # Navigation, theme control, and repository link
│   │   ├── ProjectCard/            # Reusable project card and its CSS Module
│   │   ├── Icons.jsx               # Shared inline SVG icons
│   │   └── ScrollToTop.jsx         # Scroll reset on route changes
│   ├── data/
│   │   ├── accountsData.js         # Profile links and platform icon URLs
│   │   ├── interests.js            # About-page interests
│   │   ├── projects.js             # Project card content and appearance
│   │   └── skills.js               # Skills shown on the About page
│   ├── pages/
│   │   ├── AboutPage/
│   │   ├── AccountsPage/
│   │   ├── HomePage/
│   │   └── ProjectsPage/
│   ├── App.css                     # Shared app, theme, layout, and page-section styles
│   ├── App.jsx                     # App shell and route declarations
│   ├── index.css                   # Global styles, typography, and focus treatment
│   └── main.jsx                   # React entry point and router provider
├── eslint.config.js                # ESLint flat configuration
├── index.html                      # HTML entry point and page metadata
├── package.json                    # Dependencies and npm scripts
├── vite.config.js                  # Vite, React, and React Compiler configuration
└── README.md
```

Each page and component folder keeps its specific stylesheet next to its JSX file. Put rules used across multiple pages or components in `src/App.css`; keep global base styles in `src/index.css`.