/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config
  daisyui: {
    themes: [
      "dim",
    ],
    darkTheme: "sunset",
  },
}

