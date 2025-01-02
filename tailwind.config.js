// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         dark: {
//           100: 'rgb(18, 18, 18)',
//           200: 'rgb(51, 51, 51)',
//         },
//         bella: {
//           100: '#167BF7',
//           200: '#051933',
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: 'rgb(40, 40, 40)',
          200: 'rgb(70, 70, 70)',
        },
        bella: {
          100: '#4A90E2',
          200: '#1F3A56',
        },
        blueLight: '#A0C4FF', // Azul claro
        blueMedium: '#4F8CFF', // Azul médio
        blueDark: '#2F56A8', // Azul escuro
        lavender: '#D1C6FF', // Lavanda
        mint: '#A3E1D8', // Verde mint
        pastelBlue: '#A7D8F2', // Azul pastel
        grayLight: '#E5E7EB', // Cinza claro
        grayMedium: '#9CA3AF', // Cinza médio
        grayDark: '#4B5563', // Cinza escuro
        red: '#F87171', // Vermelho para erros
        green: '#4CAF50', // Verde para sucesso
      },
    },
  },
  plugins: [],
}
