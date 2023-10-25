/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  // purge: {
  //   enabled: false,
  //   content: ['./src/**/*.html', './src/**/*.vue', './src/**/**/*.vue', './src/**/*.js']
  // },
  theme: {
    extend: {},
    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '64px',
      12: '80px'
    },
    screens: {
      sm: '375px',
      md: '560px',
      lg: '768px',
      xl: '1024px',
      xxl: '1280px'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('@tailwindcss/forms')
  ],
  daisyui: {
    themes: ['dark']
  }
}
