// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ResultModal from './ui/ResultModal'; // Pastikan path benar

export default function Footer() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!code) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`/api/verifikasi/${code}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ success: false, message: 'Terjadi kesalahan pada server.' });
    } finally {
      setLoading(false);
      setShowModal(true);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-8 border-t border-gray-800">
      {/* Grid 4 kolom untuk footer */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Kolom 1: Logo & Informasi Kontak */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg text-white mb-4">
            1 keping 1000 meaning.
          </h4>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Image
              src="/Abi.png"
              alt="PT Aurum Barakah Indonesia"
              width={400}
              height={360}
              className="w-auto h-8"
            />
          </div>
          <p className="font-bold">PT Aurum Barakah Indonesia</p>
          <p className="text-sm font-semibold">Admin: +62 812-3456-7890</p>
          <p className="text-sm">
            The Plaza Office Tower, Jl. M.H Thamrin No.Kav. 28-30 Level 7 suite 702,Menteng, Jakarta Pusat, DKI Jakarta, 10350
          </p>
        </div>

        {/* Kolom 2: Menu Utama */}
        <div className="mt-8 md:mt-0">
          <div className="h-6 mb-4 hidden md:block"></div>
          <h4 className="font-bold text-lg text-white mb-4">Menu Utama</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-500 transition-colors duration-200">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-yellow-500 transition-colors duration-200">
                Produk
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-500 transition-colors duration-200">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-500 transition-colors duration-200">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Informasi Lainnya */}
        <div className="mt-8 md:mt-0">
          <div className="h-6 mb-4 hidden md:block"></div>
          <h4 className="font-bold text-lg text-white mb-4">Informasi</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/syarat-ketentuan" className="hover:text-yellow-500 transition-colors duration-200">
                Syarat & Ketentuan
              </Link>
            </li>
            <li>
              <Link href="/kebijakan-privasi" className="hover:text-yellow-500 transition-colors duration-200">
                Kebijakan Privasi
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Kolom 4: Formulir Verifikasi */}
        <div className="mt-8 md:mt-0 ">
          <div className="h-6 mb-4 hidden md:block"></div>
          <h4 className="font-bold text-lg text-white mb-4">Verifikasi Keaslian</h4>
          <form onSubmit={handleVerify} className="flex flex-col gap-2">
            <input
              type="text"
              className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-900"
              placeholder="Kode verifikasi..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-green-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-900 transition duration-300 disabled:bg-gray-600"
              disabled={loading}
            >
              {loading ? 'Memverifikasi...' : 'Verifikasi'}
            </button>
          </form>
        </div>
      </div>  
      
      {/* Bagian Copyright di bawah */}
      <div className="text-center mt-12 pt-8 border-t border-gray-800">
        <p className="text-sm">&copy; 2025 PT Aurum Barakah Indonesia.</p>
      </div>

      <ResultModal show={showModal} onClose={() => setShowModal(false)} data={result} />
    </footer>
  );
}