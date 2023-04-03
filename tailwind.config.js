/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'navbar': '50px'
      },
      maxWidth: {
        window: '1200px'
      },
      backgroundColor: {
        yellow: '#F7EC00',
        green: '#CC33CC'
      }
    },
  },
  plugins: [],
}