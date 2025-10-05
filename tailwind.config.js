import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// we recommend preflight to false for avoid conflict in editor
const usePreflightFront = false

export default {
  // use preflight (reset CSS) override fonts size from theme.json
  corePlugins: {
    preflight: process.env.IS_EDITOR ? false : usePreflightFront,
  },
  content: [
    './**/*.{php,twig,html,json}',
    './assets/**/*.{js,jsx,ts,tsx,vue,css}',
  ],
  safelist: [],
  theme: {
    fontFamily: {
      display: ['PlayfairDisplay'],
      body: ['Roboto'],
    },
    extend: {
      gridTemplateColumns: {
        main: '8rem 1fr 8rem',
        'main-small': '1rem 1fr 1rem',
      },
      backgroundImage: (theme) => ({
        'wp-performance': "url('/assets/media/wp-performance.png')",
      }),
    },
  },
  plugins: [require('@_tw/themejson')(require('./theme.json'))],
}