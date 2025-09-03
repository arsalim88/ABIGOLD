// pages/about.js
import Head from 'next/head';
import Image from 'next/image'; // Impor komponen Image dari Next.js

export default function About() {
  return (
    <>
      <Head>
        <title>Tentang Kami - ABI GOLD</title>
        <link rel="icon" href="/Abi.png" />
      </Head>
      {/* Container utama dengan padding atas yang lebih besar untuk menghindari navbar */}
      <div className="container mx-auto py-24 px-6"> {/* py-24 untuk jarak dari navbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Kolom Kiri: Teks Tentang Kami */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Tentang Kami</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              PT Aurum Barakah Indonesia adalah perusahaan terdepan dalam industri emas, 
              berkomitmen menyediakan produk emas berkualitas tinggi dengan jaminan keaslian. 
              Kami percaya pada transparansi, integritas, dan inovasi untuk memberikan 
              pengalaman terbaik kepada pelanggan kami.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dengan pengalaman bertahun-tahun dan didukung oleh tim ahli, kami memastikan 
              setiap keping emas yang Anda dapatkan adalah investasi yang aman dan berharga. 
              Misi kami adalah menjadi mitra terpercaya Anda dalam menjaga dan mengembangkan 
              kekayaan melalui emas.
            </p>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="/Gambar2.jpg" // Ganti dengan path gambar yang relevan
              alt="Emas Batangan"
              width={500} // Sesuaikan lebar yang diinginkan
              height={350} // Sesuaikan tinggi yang diinginkan
              className="rounded-lg shadow-xl object-cover w-full h-auto max-w-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}