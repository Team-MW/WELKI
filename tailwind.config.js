/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        welki: {
          blue: '#0056b3', // Royal Blue from logo/headers
          green: '#28a745', // Green from nature/gardening text
          'light-blue': '#e6f0ff', // Light background accents
          'dark-blue': '#003d80',
        }
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        gradient: 'gradient 6s ease infinite',
      }
    },
  },
  plugins: [],
}

