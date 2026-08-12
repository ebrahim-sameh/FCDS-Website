# FCDS Website

## Overview

Faculty of Computer and Data Science site for Alexandria University. Built with React and Vite. Arabic and English use i18n, with RTL and LTR switching.

Content is based on the official faculty site:

- https://fcds.alexu.edu.eg/index.php/en/
- https://fcds.alexu.edu.eg/index.php/ar/

Repository: https://github.com/ebrahim-sameh/FCDS-Website

## Features

- Home page with hero, stats, quick links, and section previews
- About and dean message
- Departments list with search, plus department details
- Programs page with search and department filter
- News list with search and filter, plus news details
- Announcements with search, filter, and modal details
- Faculty list with search and department filter, plus faculty details
- Services and events
- Contact form with validation
- Language switcher (Arabic / English)
- Responsive layout and 404 page

## Technologies

- React 19
- Vite
- React Router (`HashRouter` in production so GitHub Pages deep links work)
- Bootstrap 5 and Bootstrap Icons
- i18next / react-i18next

## Installation

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

## Live demo (GitHub Pages)

https://ebrahim-sameh.github.io/FCDS-Website/

A GitHub Actions workflow deploys `main` to Pages. Production builds use the `/FCDS-Website/` base path. Routes on the live site use hash URLs, for example `/#/programs` and `/#/news`.

## Screenshots

Screenshots were taken in English (`localStorage.lang = en`) from a production preview build.

### Home (desktop)

![Home page on desktop](docs/screenshots/home-desktop.png)

### Home (mobile)

![Home page on mobile](docs/screenshots/home-mobile.png)

### News

![News page](docs/screenshots/news.png)

### Contact

![Contact page](docs/screenshots/contact.png)

For responsive checks, see [docs/TESTING.md](docs/TESTING.md).

## Project structure

```text
src/
  assets/locales/   # ar and en translation files
  components/       # layout and shared UI
  data/             # mock data files
  hooks/            # small shared hooks
  pages/            # route pages and home sections
  i18n.js
  App.jsx
docs/               # i18n notes, testing, screenshots
```

## Routes

Local and hash paths use the same route names:

- `/` Home
- `/about` About
- `/dean-message` Dean message
- `/departments` Departments
- `/departments/:key` Department details
- `/programs` Programs
- `/news` News
- `/news/:key` News details
- `/announcements` Announcements
- `/faculty` Faculty
- `/faculty/:key` Faculty details
- `/services` Services
- `/events` Events
- `/contact` Contact

On GitHub Pages, open them as `/#/about`, `/#/departments`, and so on.

## i18n and RTL / LTR

See [docs/i18n.md](docs/i18n.md).
