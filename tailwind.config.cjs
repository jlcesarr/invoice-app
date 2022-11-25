/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 11,
      sm: 12,
      md: 16,
      lg: 20,
      xl: 32
    },
    colors: {
      violet: {
        primary: '#7C5DFA',
        secondary: '#9277FF'
      },
      yankees: {
        primary: '#1E2139',
        secondary: '#252945'
      },
      lavender: {
        primary: '#DFE3FA'
      },
      grey: {
        primary: '#888EB0'
      },
      black: {
        primary: '#0C0E16',
        secondary: '#141625'
      },
      ube: {
        primary: '#7E88C3'
      },
      opal: {
        primary: '#EC5757'
      },
      pink: {
        primary: '#FF9797'
      },
      white: {
        primary: '#F8F8FB',
        secondary: '#F9FAFE'
      },
      charcoal: '#373B53'
    },
    extend: {
      fontFamily: {
        'spartan-bold': 'Spartan Bold, sans-serif',
        'spartan-medium': 'Spartan Medium, sans-serif'
      }
    }
  },
  plugins: []
};
