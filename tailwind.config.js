module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.html', './src/**/*.ts'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: '#FFA500',
          secondary: '#4B5563',
          success: '#10B981',
          danger: '#EF4444',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  