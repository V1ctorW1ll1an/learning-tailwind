/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

// arquivo de configuração padrão do tailwind
// https://unpkg.com/browse/tailwindcss@3.2.7/stubs/defaultConfig.stub.js

module.exports = {
  // https://tailwindcss.com/docs/content-configuration
  content: ["./src/**/*.{html,js}"],

  // https://tailwindcss.com/docs/theme
  theme: {
    extend: {
      // backgroundImage: {
      //   fundo: "url(/src/imagens/fundo.png)",
      //   // capa: "url(/src/imagens/capa.png)",
      //   // foto1: "url(/src/imagens/foto1.png)",
      //   // foto2: "url(/src/imagens/foto2.png)",
      //   // foto3: "url(/src/imagens/foto3.png)",
      // },

      // default pallet colors https://tailwindcss.com/docs/customizing-colors
      colors: {
        // menu-color
        menu: "#4b566a",
        title: "#828271",
      },
    },
  },

  // https://tailwindcss.com/docs/plugins
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],

  // prefixo para as classes geradas (nao se aplica a pseudo-classes, pseudo-elementos e breakpoints)
  // prefix: "tw-",

  // definir todas os atributos de estilo como !important
  // important: true,

  // bloquear classes
  // blocklist: [],

  // permitir classes
  // safelist: [],
};
