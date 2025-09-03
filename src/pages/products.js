// pages/products.js
import Head from 'next/head';
import ProductCard from './components/ProductCard';
import Link from 'next/link';

// Data produk dummy
const products = [
  { id: 1, name: '1 Dinar 4,25gr', weight: '4,25 gram', image: '/Dinar.png' },
  { id: 2, name: 'Find Gold', weight: '1 gram', image: '/find.png' },
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Produk ABI GOLD</title>
        <link rel="icon" href="/Abi.png" />
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
            <Link key={product.id} href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}