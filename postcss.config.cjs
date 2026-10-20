module.exports = {
  plugins: {
    // Tailwind 4 moved the PostCSS plugin out of `tailwindcss` (GH Pages
    // build has been broken since the 4.3.3 bump without this adapter).
    "@tailwindcss/postcss": {},
  },
}
