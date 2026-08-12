# Responsive testing

Check the layout at these viewport widths:

- 1920px (large desktop)
- 1440px (desktop)
- 1024px (small laptop / tablet landscape)
- 768px (tablet portrait)
- 390px (mobile)
- 360px (small mobile)

## Pages to open

Quick pass on each of these:

- Home
- About
- Departments (search for a department name)
- Programs (search and change the department filter)
- News (search and filter)
- Announcements
- Faculty (search and department filter)
- Contact (submit empty to see validation)
- Admissions (submit empty to see validation; also try the Apply now button and the hero Admissions button)
- A missing path such as `/does-not-exist` for the 404 page

## Language

Switch Arabic and English on home and on one form-heavy page (contact). Confirm direction flips (`rtl` / `ltr`) and that placeholders and empty states change language.

## Live site notes

On GitHub Pages, routes use hash URLs (`/#/news`, `/#/contact`). After deploy, open a few of those links in a new tab and confirm they load without a blank page.
