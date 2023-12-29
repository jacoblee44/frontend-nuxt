import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const sizes: Record<string, string> = {};
for (let i = 0; i < 500; i++) {
  sizes[i] = `${i / 4}rem`;
  sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`;
}

const opacities: Record<string, string> = {};
for (let i = 0; i <= 100; i++) {
  opacities[i] = `${i / 100}`;
}

const shadows = {
  'logo-box': '3px 0px 6px #0000001A',
  'sub-panel': '0px 3px 6px #00000029',
  'icon-btn': '0px 2px 8px #00000024',
  'switch-btn': '0px 3px 6px #0000001F',
  'pagination-btn': '0px 3px 6px #0000001C',
  'organization-logo': '0px 3px 10px #00000014;',
  'switch-inactive': 'inset 1px 1px 2px #00000036',
  popup: '0px 5px 10px #00000029',
};

const config: Config = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './app.vue',
    './node_modules/vue-tailwind-datepicker/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1900px',
      },
      spacing: sizes,
      minHeight: sizes,
      minWidth: sizes,
      maxHeight: sizes,
      maxWidth: sizes,
      borderWidth: {
        sm: '3px',
      },
      borderRadius: {
        sm: '3px',
        ...sizes,
      },
      fontFamily: {
        'sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '17px', letterSpacing: '0.54px' }],
        sm: ['14px', { lineHeight: '20px', letterSpacing: '0.63px' }],
        base: ['16px', { lineHeight: '22px', letterSpacing: '0.48px' }],
        lg: ['18px', { lineHeight: '24px', letterSpacing: '0.6px' }],
        xl: ['20px', { lineHeight: '28px', letterSpacing: '0.6px' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '0.72px' }],
      },
      colors: {
        primary: '#222F39',
        light: '#F8FAFB',
        dark: '#373737',
        input: {
          border: '#9797973B',
        },
        shade: {
          26: '#262626',
          '3d': '#3D3D3D',
          '5b': '#5B5B5B',
          70: '#707070',
          '8f': '#8F8F8F',
          93: '#939393',
          97: '#979797',
          e9: '#e9f0f4',
          e9e9: '#E9E9E9',
          eb: '#EBEDEE',
          fa: '#FAFAFA',
        },
        accent: '#CD6215',
        success: '#ACE374',
        danger: '#FFB5B5',
        error: '#A1141A',
        info: '#007CB4',
        green: {
          alert: '#62A238',
        },
        yellow: {
          alert: '#E1D205',
        },
        red: {
          alert: '#E84646',
          a1: '#A1141A',
          ff: '#FF9A9A',
        },
        'vtd-primary': colors.sky, // Light mode Datepicker color
        'vtd-secondary': colors.gray, // Dark mode Datepicker color
      },
      opacity: opacities,
      boxShadow: shadows,
      dropShadow: shadows,
      zIndex: {
        1: '1',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};

export default config;
