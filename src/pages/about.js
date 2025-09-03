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
      <div className="container mx-auto py-34 px-6"> {/* py-24 untuk jarak dari navbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Kolom Kiri: Teks Tentang Kami */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Tentang Kami</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              PT Aurum Barakah Indonesia adalah perusahaan yang fokus pada penyediaan produk emas berkualitas tinggi, khususnya kepingan emas 1 gram dan dinar. Kami berkomitmen untuk memberikan pilihan investasi yang aman, praktis, dan menguntungkan bagi masyarakat Indonesia.
              <br />
              <br />
              Emas yang kami tawarkan bersertifikat. Setiap keping emas, baik 1 gram maupun dinar, memiliki kadar 24 karat atau 999,9 dan dilengkapi sertifikat keaslian yang menjamin kemurnian dan kualitas terbaik. Kepingan emas 1 gram sangat ideal bagi investor pemula atau mereka yang ingin memulai investasi dengan modal terjangkau, sementara dinar, dengan nilai intrinsik dan sejarahnya yang tinggi, menjadi pilihan investasi bagi mereka yang menginginkan aset berharga dengan nilai abadi.
            </p>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="/investment3.jpg" // Ganti dengan path gambar yang relevan
              alt="Emas Batangan"
              width={500} // Sesuaikan lebar yang diinginkan
              height={350} // Sesuaikan tinggi yang diinginkan
              className="rounded-lg shadow-xl object-cover w-full h-auto max-w-md"
            />
          </div>
        </div>
      </div>
      {/* Container utama dengan padding atas yang lebih besar untuk menghindari navbar */}
      <div className="container mx-auto py-24 px-6"> {/* py-24 untuk jarak dari navbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Kolom Kanan: Gambar */}
          <div className="md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
            <Image
              src="/investment.jpg" // Ganti dengan path gambar yang relevan
              alt="Emas Batangan"
              width={500} // Sesuaikan lebar yang diinginkan
              height={350} // Sesuaikan tinggi yang diinginkan
              className="rounded-lg shadow-xl object-cover w-full h-auto max-w-md"
            />
          </div>
          {/* Kolom Kiri: Teks Tentang Kami */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Mengapa memilih kami?</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Trusted / Terpercaya
              <br />
              <br />
              Kami membangun bisnis dengan kejujuran kepada pelanggan kami serta memberikan informasi yang benar secara utuh. ABI Gold terpercaya karena etos kerja kami mencakup nilai, prinsip, semangat, dedikasi, serta prilaku positif dari seluruh keluarga besar ABI Gold.
<br />
              <br />
              ABI Gold dipercaya karena seluruh aktivitas bisnis kami berpegang teguh pada standar operasional yang ketat. Kami menggunakan teknologi modern terbaru untuk memproteksi serta menjamin keaslian, kemurnian, dan kualitas tertinggi dari sumber emas yang kami miliki. Dengan prosedur yang baku dan kontrol kualitas yang ketat, kami memastikan produk dan layanan kami memenuhi standar kepuasan pelanggan.
            </p>
          </div>

        </div>
      </div>
      <div className="container mx-auto py-24 px-6"> {/* py-24 untuk jarak dari navbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Kolom Kiri: Teks Tentang Kami */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Kelebihan Kami</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Produk Fisik

              ABI Gold memasarkan produk emas batangan 1 gram dan 1 dinar dalam bentuk fisik dan stok siap. Sistem distribusi melalui agen yang terotorisasi dan memenuhi kualifikasi khusus, membuat produk ABI Gold sangat terpercaya.
              <br />
              <br />
              Teknologi Modern

              Kami menggunakan teknologi modern terbaru untuk melindungi dan menjamin keaslian, kemurnian, dan kualitas tertinggi dari sumber emas yang kami miliki.
              <br />
              <br />
              Keunggulan

              Keunggulan ABI Gold terletak pada produk-produk berkualitas tinggi yang telah melalui proses verifikasi menggunakan pemindaian QR Code dan kesamaan nomor faktur yang terhubung langsung dengan halaman khusus untuk autentikasi.
            </p>
          </div>
          {/* Kolom Kanan: Gambar */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="/investment2.jpg" // Ganti dengan path gambar yang relevan
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