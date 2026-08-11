# FCDS Website

Faculty of Computer and Data Science site for Alexandria University. Built with React and Vite. Arabic and English use i18n, with RTL and LTR switching.

## Features

- Home page with hero, stats, quick links, news preview, and services preview
- News list with search and filters, plus news details pages
- Services page with reusable cards
- Contact page with form validation and success messages
- About and dean message routes
- Language switcher (Arabic / English)
- Responsive layout
- 404 page for unknown routes

## Technologies

- React 19
- Vite
- React Router
- Bootstrap 5 and Bootstrap Icons
- i18next / react-i18next

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  assets/locales/   # ar and en translation files
  components/       # shared UI and layout
  data/             # mock data files
  pages/            # Home, News, Services, Contact, NotFound, ...
  i18n.js
  App.jsx
```

## Routes

- `/` Home
- `/about` About
- `/dean-message` Dean message
- `/news` News list
- `/news/:key` News details
- `/services` Services
- `/contact` Contact

## i18n and RTL / LTR

See [docs/i18n.md](docs/i18n.md) for how language switching and RTL/LTR work.
