# FCDS Website

Faculty of Computer and Data Science site for Alexandria University. React + Vite, with Arabic and English through i18n (RTL/LTR).

## Features

- Home page with hero, stats, quick links, and a services preview
- Services page with reusable cards
- Contact page with form validation and success messages
- Language switcher (Arabic / English)
- Responsive layout
- React Router and a 404 page

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
  pages/            # Home, Services, Contact, NotFound
  i18n.js
  App.jsx
```

## i18n and RTL / LTR

Translations are under `src/assets/locales/ar` and `src/assets/locales/en`. The header language switcher updates i18next, sets `lang` and `dir` on the document, and keeps the choice in `localStorage`.

## Team notes

Services and Contact are on the `services-contact` branch. Other pages (About, Departments, News, Faculty, Events) are owned by teammates and may still be merging into `main`.
