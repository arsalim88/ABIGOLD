// components/ProductCard.jsx
import Image from 'next/image';

const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden max-w-2xl mx-auto my-10 p-6 py-20">
      {/* Bagian Image Besar */}
      <div className="relative w-full h-80 mb-6">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

      {/* Deskripsi Produk */}
      <div className="space-y-6 text-gray-700">
        <p className="text-lg leading-relaxed text-justify">
          {product.description}
        </p>

        {/* Ayat Al-Qur'an dan Maknanya */}
        <div className="bg-gray-100 p-4 rounded-md shadow-inner text-center">
          <p className="text-2xl font-serif italic mb-2">
            إِنَّ اللّهَ مَعَ الصَّابِرِينَ
          </p>
          <p className="font-semibold text-lg">Innalaha ma'ashobirin</p>
          <p className="text-sm mt-1">
            (Sesungguhnya Allah bersama orang-orang yang sabar.)
          </p>
          <p className="text-sm mt-2 leading-relaxed">
            Makna dari ayat ini adalah bahwa Allah senantiasa memberikan pertolongan, keberkahan, dan dukungan kepada orang-orang yang bersabar dalam menghadapi ujian, kesulitan, atau cobaan hidup.
          </p>
        </div>

        {/* Bagian Dua Image Sejajar */}
        {product.additionalImages && product.additionalImages.length > 0 && (
          <div className="flex justify-center gap-4 my-6">
            {product.additionalImages.map((img, index) => (
              <div key={index} className="w-1/2">
                <div className="relative pb-[100%]">
                  <Image
                    src={img}
                    alt={`${product.name} - ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Keunggulan & Spesifikasi */}
      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Keunggulan Produk
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {product.advantages && product.advantages.map((advantage, index) => (
              <li key={index}>
                <span className="font-semibold">{advantage.title}:</span> {advantage.description}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Spesifikasi Produk
          </h3>
          <ul className="list-none text-gray-700 space-y-2">
            {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
              <li key={key}>
                <span className="font-semibold">{key}:</span> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Kalimat Penutup */}
      <p className="text-center text-gray-800 font-medium mt-8 leading-relaxed text-justify">
        {product.closingStatement}
      </p>
    </div>
  );
};

export default ProductCard;