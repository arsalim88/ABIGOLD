// components/Footer.jsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-8 border-t border-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Kolom 1: Logo & Informasi Kontak */}
        <div className="space-y-4">
          <h4 className="font-bold text-xl text-white mb-4">
            1 keping 1000 meaning
          </h4>
          <div className="flex items-center justify-center  md:justify-start mb-4">
            <Image
              src="/Abi.png" // Path ke logo Anda
              alt="PT Aurum Barakah Indonesia"
              width={400}
              height={360}
              className="w-auto h-8"
            />
          </div>
          <p className="font-bold">PT Aurum Barakah Indonesia</p>
          <p className="text-sm font-semibold">Admin: +62 812-3456-7890</p>
          <p className="text-sm">
            Jl. Contoh Jalan No. 123, <br />
            Jakarta Pusat, 10110
          </p>
        </div>

        {/* Kolom 2: Menu Utama */}
        <div>
          {/* Placeholder untuk menyamakan tinggi */}
          <div className="h-6 mb-4 hidden md:block"></div>
          <h4 className="font-bold text-lg text-white mb-4">Menu Utama</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-500 transition-colors duration-200"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-yellow-500 transition-colors duration-200"
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-500 transition-colors duration-200"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-500 transition-colors duration-200"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Informasi Lainnya */}
        <div>
          {/* Placeholder untuk menyamakan tinggi */}
          <div className="h-6 mb-4 hidden md:block"></div>
          <h4 className="font-bold text-lg text-white mb-4">Informasi</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/verifikasi-emas"
                className="hover:text-yellow-500 transition-colors duration-200"
              >
                Verifikasi Keaslian
              </Link>
            </li>
            <li>
              <Link
                href="/syarat-ketentuan"
                className="hover:text-yellow-500 transition-colors duration-200"
              >
                Syarat & Ketentuan
              </Link>
            </li>
            <li>
              <Link
                href="/kebijakan-privasi"
                className="hover:text-yellow-500 transition-colors duration-200"
              >
                Kebijakan Privasi
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bagian Copyright di bawah */}
      <div className="text-center mt-12 pt-8 border-t border-gray-800">
        <p className="text-sm">&copy; 2025 PT Aurum Barakah Indonesia.</p>
      </div>
    </footer>
  );
}
