/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
      extend: {
        colors: {
          brand: {
            50: "#f5f7fa",
            100: "#e4e9f1",
            200: "#cfd7e5",
            300: "#aebbd3",
            400: "#889abc",
            500: "#6b7fa9",   // gris azulado tipo maqueta
            600: "#55688f",
            700: "#435270",
            800: "#37445c",
            900: "#2f3a4d",
          },
          status: {
            libre: "#34d399",        // verde
            ocupado: "#f87171",      // rojo
            mantenimiento: "#fbbf24" // amarillo
          }
        },
        boxShadow: {
          panel: "0 10px 30px rgba(0,0,0,0.15)"
        }
      },
    },
    plugins: [],
  };
  