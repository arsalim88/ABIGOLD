// next.config.mjs
import tailwindcss from '@tailwindcss/postcss';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Konfigurasi Next.js lainnya ada di sini (jika ada)
  // ...

  // Tambahkan konfigurasi Tailwind CSS di dalam `postcss`
  postcss: {
    plugins: {
      tailwindcss: {
        content: [
          './pages/**/*.{js,ts,jsx,tsx}',
          './components/**/*.{js,ts,jsx,tsx}',
        ],
        theme: {
          extend: {
            colors: {
              'dark-green': '#0A311F', // Ini adalah warna kustom Anda
            },
          },
        },
      },
    },
  },
};

export default nextConfig;