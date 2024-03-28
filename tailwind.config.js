/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.src/renderer/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 0px 6px -0px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none'
    },
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              margin: '0px',
              'margin-bottom': '8px',
              padding: '0px',
              'background-color': 'transparent'
            }
          }
        }
      }
    },
    fontSize: {
      '4xl': ['2.474rem', '1.16666666666'],
      '3xl': ['2.128rem', '1.2'],
      '2xl': ['1.829rem', '1.25'],
      xl: ['1.573rem', '1.3'],
      lg: ['1.353rem', '1.5'],
      md: ['1.163rem', '1.75rem'],
      base: ['1rem', '1.75rem'],
      sm: ['0.86rem', '1.75rem'],
      xs: ['0.739rem', '1.75rem']
    },

    fontFamily: {
      Montserrat: ['Montserrat', 'serif'],
      body: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui'],
      sans: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: [require('flowbite-typography'), require('flowbite/plugin')]
}
