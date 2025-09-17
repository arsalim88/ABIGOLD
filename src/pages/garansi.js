// components/ProductWarranty.js
import React from 'react';

const ProductWarranty = () => {
  return (
    <div className="bg-white py-20 rounded-lg max-w-2xl mx-auto my-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Garansi Produk Kami
      </h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Jaminan Keaslian dan Kualitas Terbaik
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Kami memberikan <strong className="text-blue-600">garansi keaslian dan kualitas terbaik</strong> untuk setiap produk emas dinar dan logam mulia yang kami jual. Kami sangat memahami nilai investasi Anda, oleh karena itu, setiap produk yang kami tawarkan telah melalui proses uji ketelitian dan kualitas yang ketat.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Produk kami dijamin sesuai dengan standar internasional, memastikan Anda mendapatkan emas murni dengan kualitas yang terverifikasi dan dapat dipercaya.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Pengajuan Pengembalian
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Jika Anda menemukan <strong className="text-red-600">ketidaksesuaian</strong> pada produk yang diterima, seperti keaslian atau kualitas yang tidak sesuai dengan deskripsi, Anda dapat mengajukan <strong className="text-blue-600">pengembalian atau refund</strong>.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Pengajuan dapat dilakukan dalam waktu <strong className="text-red-600">3 hari kerja</strong> setelah penerimaan barang, dengan mengikuti prosedur yang telah ditetapkan oleh tim kami. Silakan hubungi layanan pelanggan kami untuk panduan lebih lanjut.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Komitmen Kami
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Kami berkomitmen penuh untuk menjaga kepuasan pelanggan dan memberikan pelayanan terbaik. Garansi ini adalah wujud nyata dari komitmen kami untuk memastikan pengalaman berbelanja yang aman, nyaman, dan terpercaya bagi Anda.
        </p>
      </div>
    </div>
  );
};

export default ProductWarranty;