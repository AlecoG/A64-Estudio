export default {
  content: [
    "./index.html",
    // Esta línea le dice a Tailwind que escanee todos los archivos JS, JSX, TS, TSX dentro de 'src/'
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
