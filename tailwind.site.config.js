/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      backgroundImage: {
        fundo: "url(/src/imagens/fundo.png)",
        // capa: "url(/src/imagens/capa.png)",
        // foto1: "url(/src/imagens/foto1.png)",
        // foto2: "url(/src/imagens/foto2.png)",
        // foto3: "url(/src/imagens/foto3.png)",
      },
    },
  },

  plugins: [],
};
