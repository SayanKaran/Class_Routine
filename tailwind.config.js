/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 20px rgba(177, 255, 255, 0.759)',
    },
  },
  plugins: [],
}
}
