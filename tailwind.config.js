/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bir: {
          50: "#f8fafc",
          100: "#f1f5f9",
          300: "#c7d2fe",
          500: "#6366f1", // indigo-500
          600: "#4f46e5", // indigo-600
        },
        chaos: {
          400: "#f59e0b", // amber-400
          500: "#f97316", // amber-500
        },
      },
      keyframes: {
        spinslow: { to: { transform: "rotate(360deg)" } },
        floaty: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" }
        },
        jiggle: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-6px)" },
          "50%": { transform: "translateX(4px)" },
          "75%": { transform: "translateX(-3px)" },
          "100%": { transform: "translateX(0)" }
        }
      },
      animation: {
        "spin-slow": "spin-slow 1s linear infinite",
        floaty: "floaty 3s ease-in-out infinite",
        jiggle: "jiggle .6s ease-in-out",
      }
    },
  },
  plugins: [],
};


