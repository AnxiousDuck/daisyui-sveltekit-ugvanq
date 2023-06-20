module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#f28f1f',

          secondary: '#a382d8',

          accent: '#ffb677',

          neutral: '#23283e',

          'base-100': '#f4f4f6',

          info: '#84cce7',

          success: '#33db98',

          warning: '#e8a32c',

          error: '#ef4374',
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      spg: ['Space Grotesk', 'serif'],
      hkg: ['Hanken Grotesk', 'serif'],
      orbit: ['Orbit', 'sans-serif'],
      dm_mono: ['DM Mono', 'sans-serif'],
    },
  },
};

// font-family: 'Gasoek One', sans-serif;
// font-family: 'Hanken Grotesk', sans-serif;
// font-family: 'Kanit', sans-serif;
// font-family: 'Orbit', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Space Grotesk', sans-serif;
