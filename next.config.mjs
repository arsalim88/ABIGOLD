/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // --- MULAI PERUBAHAN ---
  images: {
    unoptimized: true,
  },
  // --- SELESAI PERUBAHAN ---
};

export default nextConfig;