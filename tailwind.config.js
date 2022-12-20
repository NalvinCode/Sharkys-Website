/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#1AC9FF',
          default: '#1fb6ff',
          dark: '#2F4A73',
          medium: '#1C3068'
        },
        indigo: {
          default: '#4B4BA4',
          light: '#6C3CE2'
        },
        yellow: {
          default: '#F6D15E'
        },
        violet: {
          default: '#432F76'
        }
      },
      fontFamily: {
        'bellota-text': ['"Bellota Text"'],
        'boulby-one': ["'Bowlby One SC'"],
        'Nunito': ["'Nunito'"]
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translatey(0px)'},
          '50%': { transform: 'translatey(-10px)' },
          '100%': { transform: 'translatey(0px)'}
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        wiggle_inv: {
          '0%, 100%': { transform: 'rotate(2deg)' },
          '50%': { transform: 'rotate(-2deg)' },
        },
        hang: {
          '0%, 100%': { transform: 'rotate(2deg)' },
          '50%': { transform: 'rotate(-2deg)' },
        },
        pulse: {
          '0%, 100%': { transform: 'opacity: 1' },
          '50%': { transform: 'opacity: 0.8' },
        }
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
        wiggle_inv: 'wiggle_inv 2s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
