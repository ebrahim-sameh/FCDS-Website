# FCDS Website

Faculty of Computer and Data Science website for Alexandria University. Built with React and Vite. Arabic and English are both supported through i18n, with RTL and LTR switching.

## Features

- Home page with hero, stats, quick links, and services preview
- Services page with reusable service cards
- Contact page with form validation and success messages
- Language switcher (Arabic / English)
- Responsive layout for desktop and mobile
- React Router navigation and a 404 page

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

Open [http://localhost:5173](http://localhost:5173).

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
  pages/            # Home, Services, Contact, NotFound
  i18n.js
  App.jsx
```

## i18n and RTL / LTR

Translation files live under `src/assets/locales/ar` and `src/assets/locales/en`. The language switcher in the header updates `i18next`, sets `document.documentElement.lang` and `dir`, and stores the choice in `localStorage`.

## Team notes

Work on Services and Contact lives on the `services-contact` branch. Other pages (About, Departments, News, Faculty, Events) are owned by other teammates and may still be merging into `main`.
