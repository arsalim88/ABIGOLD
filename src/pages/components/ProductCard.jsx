// components/ProductCard.jsx
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 w-64 md:w-72">
      {/* Container untuk memastikan gambar memiliki ukuran tetap */}
      <div className="relative w-full h-64 md:h-72">
        <Image
          src={product.image}
          alt={product.name}
          fill
          cover // Memastikan gambar mengisi ruang tanpa distorsi
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-700">{product.weight}</p>
      </div>
    </div>
  );
}