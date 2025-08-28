/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        tealDeep: "#0E5E6F",
        sage: "#7AA095",
        peach: "#F2C6B4",
        cream: "#FFF8F0",
        charcoal: "#2F3E46"
      },
      fontFamily: {
        display: ['Prata', 'serif'],
        body: ['Poppins', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        soft: "0 10px 35px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
}
