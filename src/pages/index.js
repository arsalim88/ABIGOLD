import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const goldPrices = [
    { type: "Emas Batangan", weight: "10 gram", price: "Rp 10.500.000" },
    { type: "Emas Batangan", weight: "5 gram", price: "Rp 5.250.000" },
    { type: "Koin Emas", weight: "1 gram", price: "Rp 1.070.000" },
    { type: "Emas Perhiasan", weight: "2 gram", price: "Rp 2.050.000" },
  ];

  // Tambahkan path gambar ke data testimoni
  const testimonials = [
    {
      quote:
        "Layanan sangat cepat dan produknya terjamin keasliannya. Sangat puas!",
      name: "Andi S.",
      title: "Investor",
      image: "/pp1.png", // Ganti dengan path foto Anda
    },
    {
      quote:
        "Tampilan website profesional dan fitur verifikasinya sangat membantu. Top!",
      name: "Budi P.",
      title: "Pelanggan",
      image: "/pp2.png", // Ganti dengan path foto Anda
    },
    {
      quote: "Harga emas di sini sangat kompetitif. Rekomendasi banget!",
      name: "Siti H.",
      title: "Kolektor",
      image: "/pp1.png", // Ganti dengan path foto Anda
    },
  ];
  

  const homepageProducts = [
    { id: 1, name: "Dinar 4,25 gr", weight: "4,25 gram", image: "/Dinar.png" },
    { id: 2, name: "Find Gold", weight: "1 gram", image: "/find.png" },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 5000); // Ganti testimoni setiap 5 detik
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentTestimonialIndex];
  return (
    <>
      <Head>
        <title>ABI GOLD</title>
        <meta
          name="description"
          content="Situs web profil perusahaan emas semi-komersial."
        />

      <link rel="icon" href="/Abi.png" />

      </Head>
      {/* Bagian 1: Hero Section */}
      <div className="relative h-screen flex items-center justify-start">
        <div className="absolute inset-0 bg-[url('/Gambar1.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6 py-16 text-white">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Investasi Aman, Masa Depan Cerah
            </h1>
            <p className="text-lg md:text-xl font-light mb-6">
              Kami menyediakan emas berkualitas tinggi dengan jaminan keaslian
              dan kemurnian.
            </p>
            <Link
              href="/products"
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Lihat Produk Kami
            </Link>
          </div>
        </div>
      </div>
      {/* Bagian 2: Tentang Emas */}
      <div className="container mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-green-950">
              Emas: Simbol Kekayaan Abadi
            </h2>
            <p className="text-green-950">
              Emas telah lama dianggap sebagai investasi yang aman dan stabil.
              Selain nilai historisnya, emas juga berfungsi sebagai lindung
              nilai terhadap inflasi dan ketidakpastian ekonomi.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/Gambar2.jpg"
              alt="Emas Batangan"
              width={500}
              height={300}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      {/* Bagian 3: Produk Unggulan */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-green-950 text-center mb-8">
          Produk Unggulan Kami
        </h2>

        {/* Kontainer Flexbox untuk memusatkan dua produk */}
        <div className="flex justify-center gap-8 flex-wrap">
          {homepageProducts.slice(0, 2).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="bg-green-800 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>
      {/* Bagian 4: Tabel Harga Emas */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-green-950 text-center mb-8">
            Harga Emas Hari Ini
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3 w-full">
              <Image
                src="/Gambar2.jpg"
                alt="Tampilan Emas"
                width={500}
                height={500}
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-2/3 w-full">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold text-green-950">
                        Jenis
                      </th>
                      <th className="px-6 py-3 text-left font-semibold text-green-950">
                        Berat
                      </th>
                      <th className="px-6 py-3 text-left font-semibold text-green-950">
                        Harga
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {goldPrices.map((item, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4">{item.type}</td>
                        <td className="px-6 py-4">{item.weight}</td>
                        <td className="px-6 py-4 font-bold text-yellow-600">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bagian 5: Testimoni */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-3xl text-green-950 font-bold text-center mb-8 ">
          Apa Kata Mereka?
        </h2>
        <div className="flex justify-center testimonial-container">
          <div className="md:w-2/3">
            {currentTestimonial && (
              <div
                key={currentTestimonial.name}
                className="bg-white p-6 rounded-lg shadow-lg text-center animate-slide-in-in-place"
              >
                <p className="italic text-green-950 mb-6 text-lg">
                  "{currentTestimonial.quote}"
                </p>
                <div className="flex flex-col items-center">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover mb-4"
                  />
                  <p className="font-semibold text-gray-900 text-lg">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {currentTestimonial.title}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Bagian 6: Marketplace dan Download App */}
      <div className="bg-gray-100 text-green-950 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Temukan Kami di Marketplace
          </h2>
          <p className="mb-8">
            Belanja produk emas kami dengan mudah dan aman.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            {/* Marketplace Images */}
            <Link
              href="https://shopee.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center"
            >
              <div className="relative w-full" style={{ height: "100px" }}>
                <Image
                  src="/shopee.png"
                  alt="Shopee"
                  layout="fill"
                  objectFit="contain"
                  className="hover:scale-110 transition-transform"
                />
              </div>
            </Link>
            <Link
              href="https://tokopedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center"
            >
              <div className="relative w-full" style={{ height: "100px" }}>
                <Image
                  src="/tokopedia.png"
                  alt="Tokopedia"
                  layout="fill"
                  objectFit="contain"
                  className="hover:scale-110 transition-transform"
                />
              </div>
            </Link>
            <Link
              href="https://tiktok.com/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center"
            >
              <div className="relative w-full" style={{ height: "100px" }}>
                <Image
                  src="/tiktok.png"
                  alt="TikTok Shop"
                  layout="fill"
                  objectFit="contain"
                  className="hover:scale-110 transition-transform"
                />
              </div>
            </Link>
          </div>

          <h2 className="text-3xl font-bold mb-4">Download Aplikasi Kami</h2>
          <p className="mb-8 ">
            Dapatkan kemudahan verifikasi dan update harga langsung dari
            smartphone Anda.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* App Store Images */}
            <Link
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center"
            >
              <div className="relative w-full" style={{ height: "120px" }}>
                <Image
                  src="/py.png"
                  alt="Google Play"
                  layout="fill"
                  objectFit="contain"
                  className="hover:scale-110 transition-transform"
                />
              </div>
            </Link>
            <Link
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center"
            >
              <div className="relative w-full" style={{ height: "120px" }}>
                <Image
                  src="/ap.png"
                  alt="App Store"
                  layout="fill"
                  objectFit="contain"
                  className="hover:scale-110 transition-transform"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
