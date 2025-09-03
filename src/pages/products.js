// pages/products.js
import Head from 'next/head';
import ProductCard from './components/ProductCard';

// Data produk dummy yang hanya berisi dua item
const products = [
  { id: 1, name: 'Emas Batangan', weight: '10 gram', image: '/Gambar2.jpg' },
  { id: 2, name: 'Koin Emas', weight: '5 gram', image: '/Gambar2.jpg' },
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Produk Emas Kami</title>
      </Head>
      <div className="container mx-auto py-16 px-6">
        {/* Bagian Hero untuk Halaman Produk */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-2">Produk Emas Kami</h1>
          <p className="text-lg text-gray-600">Temukan koleksi emas batangan, koin, dan perhiasan.</p>
        </div>

        {/* Kontainer Flexbox untuk memusatkan produk */}
        <div className="flex justify-center gap-8 flex-wrap">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}