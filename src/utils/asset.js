/** Prefix a public-folder path with Vite's base (needed on GitHub Pages). */
export const asset = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
};
