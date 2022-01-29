module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:false,
  theme: {
    extend: {
      colors: { 
        primary: '#2563eb',
        secondary: '#000000' 
      }
    },
  },
  plugins: [],
}
