// components/Navbar.jsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo di Kiri */}
        <Link href="/">
          <Image
            src="/Abi.png" // Pastikan gambar ini ada di public/images
            alt="Logo Emas Kita"
            width={40}
            height={40}
            className="w-auto h-8"
          />
        </Link>

        {/* Item Navigasi Desktop */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
            Beranda
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
            Produk
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
            Tentang Kami
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
            Kontak
          </Link>
          <Link href="/verifikasi-emas" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
            Verifikasi
          </Link>
        </nav>

        {/* Tombol Hamburger (Hanya di Layar Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-yellow-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile (Muncul Saat isMenuOpen True) */}
      <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-lg px-6 py-4 border-t border-gray-200 transition-all duration-300`}>
        <div className="flex flex-col space-y-4 text-center">
          <Link href="/" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors" onClick={toggleMenu}>
            Beranda
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors" onClick={toggleMenu}>
            Produk
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors" onClick={toggleMenu}>
            Tentang Kami
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors" onClick={toggleMenu}>
            Kontak
          </Link>
          <Link href="/verifikasi-emas" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors" onClick={toggleMenu}>
            Verifikasi
          </Link>
        </div>
      </nav>
    </header>
  );
}