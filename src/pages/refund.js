// components/RefundPolicy.js
import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white-100 p-8 py-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Kebijakan Pengembalian & Refund
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Memastikan pengalaman belanja yang aman dan terpercaya untuk Anda.
        </p>

        {/* Kebijakan Pengembalian */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">
            Ketentuan Pengembalian Barang
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">✅ Barang yang Dapat Dikembalikan</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Emas dinar atau logam mulia</strong> yang belum terpakai, dalam kondisi utuh dan tidak rusak.
                </li>
                <li>
                  Barang yang tidak sesuai dengan pesanan yang diterima oleh Anda.
                </li>
                <li>
                  Barang yang memiliki <strong>video unboxing penuh</strong> dari awal hingga akhir.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">❌ Barang yang Tidak Dapat Dikembalikan</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Barang yang kemasannya telah dibuka atau sudah digunakan.
                </li>
                <li>
                  Emas dinar atau logam mulia yang telah diproses atau diubah.
                </li>
                <li>
                  Barang yang diajukan pengembaliannya <strong>setelah batas waktu</strong> yang ditentukan.
                </li>
                <li>
                  Barang yang <strong>tidak memiliki video unboxing</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Batas Waktu */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">
            Batas Waktu Pengembalian
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Pengembalian barang hanya dapat diajukan dalam waktu <strong>3 hari kerja</strong> setelah barang diterima. Permintaan yang diajukan setelah batas waktu tersebut tidak akan diproses.
          </p>
        </div>

        {/* Prosedur Pengembalian */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">
            Prosedur Pengembalian & Refund
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="font-bold text-gray-800 flex items-center mb-2">
                <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">1</span>
                Permintaan Pengembalian
              </h3>
              <p className="text-gray-600">
                Hubungi Customer Service kami melalui email, telepon, atau chat. Pastikan Anda menyertakan <strong>bukti pembelian</strong> (nota/faktur), <strong>foto barang</strong>, dan <strong>video unboxing</strong>.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="font-bold text-gray-800 flex items-center mb-2">
                <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">2</span>
                Verifikasi Permintaan
              </h3>
              <p className="text-gray-600">
                Tim Customer Service akan memverifikasi permintaan Anda. Jika memenuhi syarat, kami akan memberikan instruksi untuk proses pengiriman kembali.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="font-bold text-gray-800 flex items-center mb-2">
                <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">3</span>
                Pengiriman Barang
              </h3>
              <p className="text-gray-600">
                Kirimkan barang kembali kepada kami sesuai instruksi. Barang harus dalam kondisi semula, lengkap dengan kemasan aslinya.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h3 className="font-bold text-gray-800 flex items-center mb-2">
                <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">4</span>
                Proses Refund
              </h3>
              <p className="text-gray-600">
                Setelah barang diterima dan lolos pemeriksaan, refund akan diproses. Dana akan ditransfer ke rekening Anda dalam waktu <strong>hingga 7 hari kerja</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Ketentuan Biaya Pengiriman */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">
            Biaya Pengiriman
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Biaya pengiriman barang kembali menjadi tanggung jawab Anda, kecuali jika pengembalian disebabkan oleh kesalahan dari pihak kami (penjual).
          </p>
        </div>

        {/* Ketentuan Buyback */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">
            Ketentuan Buyback (Jual Kembali)
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Untuk melakukan buyback, Anda wajib melampirkan <strong>kwitansi pembelian resmi dari ABI</strong> serta <strong>identitas diri</strong>. Proses ini hanya dapat dilakukan di seluruh <strong>Offline Store ABI</strong> di Indonesia.
            </p>
            <p>
              Perhiasan akan melalui proses pemeriksaan oleh tim kami. Jika spesifikasi perhiasan tidak sesuai dengan kwitansi, ABI berhak menolak permohonan buyback.
            </p>
            <p>
              Kami menjamin buyback untuk produk asli yang dibeli dari ABI. Nilai buyback akan disesuaikan dengan harga yang sudah kami tentukan di aplikasi.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RefundPolicy;