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
          green: '#037971', // Green from nature/gardening text
          'light-blue': '#e6f0ff', // Light background accents
          'dark-blue': '#003d80',
        }
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        gradient: 'gradient 6s ease infinite',
        tilt: 'tilt 10s infinite linear',
        shine: 'shine 1.5s',
        'bounce-subtle': 'bounce-subtle 3s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}
