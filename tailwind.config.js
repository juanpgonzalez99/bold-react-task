module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      blue: '#111e6c',
      red: '#ef434e',
      darkgray: '#323232',
      lightgray: '#969696',
      background: '#e5e7ef',
      white: '#ffffff',
      transparent: 'transparent',
    },
    extend: {
      height: {
        table: 'calc(100vh - 300px)',
        tablecontent: 'calc(100% - 40px)',
      },
      gridTemplateColumns: {
        'bold-layout': '35% 65%',
      },
    },
  },
  plugins: [],
};
