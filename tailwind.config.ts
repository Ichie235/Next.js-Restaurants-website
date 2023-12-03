import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
const withMT = require('@material-tailwind/react/utils/withMT');
const config: Config = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'res-blue': '#78909C',
        'res-green': '#00302E',
        'res-gray': '#F4F5F7',
        'res-gray-lite': '#EEEFF4',
        'res-orange-lite': '#FBDDBB',
      },
    },
  },
  plugins: [require('daisyui')],
});
export default config;
