// postcss.config.mjs
import tailwindcss from '@tailwindcss/postcss';
import tailwindConfig from './tailwind.config';

export default {
  plugins: {
    tailwindcss: tailwindConfig,
  },
};