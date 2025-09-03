import Head from 'next/head';

const PrivacyPolicyPage = () => {
  return (
    <div className="mt-5">
      <Head>
        <title>Kebijakan Privasi - ABI</title>
      </Head>
      <div className="bg-white-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Kebijakan Privasi
          </h1>

          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Pernyataan Privasi untuk ABI. Kami di ABI sangat menghargai privasi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan mengungkapkan informasi pribadi Anda saat Anda berinteraksi dengan situs web kami, membeli produk kami, atau menggunakan layanan kami, baik secara online maupun offline.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              1. Informasi yang Kami Kumpulkan
            </h2>
            <p className="mb-4">
              Kami mengumpulkan informasi pribadi yang Anda berikan kepada kami, termasuk tetapi tidak terbatas pada:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Nama lengkap</li>
              <li>Alamat email</li>
              <li>Alamat pengiriman</li>
              <li>Nomor telepon</li>
              <li>Informasi pembayaran (misalnya, kartu kredit, transfer bank)</li>
              <li>Riwayat pembelian dan transaksi</li>
            </ul>
            <p className="mb-4">
              Selain itu, kami juga mengumpulkan informasi non-pribadi, seperti data navigasi dan penggunaan situs yang membantu kami meningkatkan layanan kami.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              2. Penggunaan Informasi
            </h2>
            <p className="mb-4">
              Informasi pribadi Anda digunakan untuk:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Memproses pesanan dan transaksi</li>
              <li>Mengirimkan konfirmasi, informasi pengiriman, atau notifikasi terkait pesanan Anda</li>
              <li>Menyediakan dukungan pelanggan</li>
              <li>Mengirimkan penawaran dan promosi produk yang relevan</li>
              <li>Meningkatkan pengalaman belanja Anda di situs kami</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              3. Keamanan Data
            </h2>
            <p className="mb-4">
              Kami berkomitmen untuk melindungi informasi pribadi Anda. Kami menggunakan teknologi dan prosedur yang aman untuk menjaga data Anda agar tetap aman, termasuk enkripsi dan langkah-langkah keamanan lainnya.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              4. Pembagian Informasi
            </h2>
            <p className="mb-4">
              Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali jika diperlukan oleh hukum atau untuk memfasilitasi transaksi dengan pihak ketiga yang berwenang (misalnya, perusahaan pengiriman atau layanan pembayaran).
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              5. Cookie dan Teknologi Pelacakan
            </h2>
            <p className="mb-4">
              Kami menggunakan cookie untuk mengumpulkan informasi tentang penggunaan situs kami. Cookie membantu kami menyediakan pengalaman yang lebih baik dan mempersonalisasi penawaran kami. Anda dapat mengatur browser Anda untuk menolak cookie, tetapi ini mungkin mempengaruhi pengalaman belanja Anda.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              6. Hak Anda
            </h2>
            <p className="mb-4">
              Anda memiliki hak untuk mengakses, memperbarui, atau menghapus informasi pribadi Anda yang kami simpan. Jika Anda ingin melakukannya, silakan hubungi kami melalui informasi kontak di bawah.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              7. Perubahan Kebijakan Privasi
            </h2>
            <p className="mb-4">
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Setiap perubahan akan diposting di halaman ini dan berlaku mulai dari tanggal yang tertera di bawah.
            </p>
            <p className="font-semibold mb-4">
              Tanggal efektif: 20 Maret 2025
            </p>
            <p>
              Jika Anda memiliki pertanyaan mengenai kebijakan privasi kami, Anda dapat menghubungi kami di:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Email: admin@abigold.co.id</li>
              <li>Nomor Telepon: +6287825159746</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;