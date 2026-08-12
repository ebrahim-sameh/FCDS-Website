# FCDS website presentation notes

Short talk outline for the 10 to 15 minute discussion. Keep it plain. Do not read every slide word for word.

## 1. Project idea

We built a bilingual React site for the Faculty of Computer and Data Science at Alexandria University. Students, staff, and visitors can browse departments, programs, news, announcements, faculty, services, events, and contact the faculty.

Official content reference:

- https://fcds.alexu.edu.eg/index.php/en/
- https://fcds.alexu.edu.eg/index.php/ar/

## 2. Approach

- React + Vite for a fast SPA
- React Router for separate pages and detail routes
- i18next for Arabic and English, with RTL and LTR
- Bootstrap for layout and responsive behavior
- Data files under `src/data/` so pages stay thin
- Shared UI pieces: cards, search, filters, modal, loading and empty states

## 3. What we implemented

- Home with hero, stats, previews, and quick links
- About and dean message
- Departments and department details
- Programs
- News list with search and filter, plus news details
- Announcements with search, filter, and modal details
- Faculty with search, department filter, and details
- Services and events
- Contact form with i18n validation
- 404 page
- Mobile nav (hamburger under xl)

## 4. Results

- Full bilingual UI, including forms and empty or error messages
- Language choice kept in `localStorage`
- Search and filters on news, faculty, and announcements
- Screenshots in `docs/screenshots/`
- Docs for i18n in `docs/i18n.md`

## 5. How to run

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

## 6. Closing

Point to GitHub: https://github.com/AhmedALHadiwi/FCDS-Website

Mention who worked on which areas only if asked. Everyone should be ready to talk about routing, i18n, and one feature they used.
