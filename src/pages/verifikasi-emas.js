// pages/verifikasi-emas.js
import { useState } from 'react';
import ResultModal from './components/ui/ResultModal';
import Head from 'next/head';

export default function VerifikasiEmas() {
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
    <>
      <Head>
        <title>Verifikasi Keaslian Emas</title>
        <link rel="icon" href="/Abi.png" />
      </Head>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/green.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="relative z-20 max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-2xl transition-all duration-300 transform">
          <div>
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Verifikasi Keaslian Emas
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600">
              Masukkan kode seri produk Anda untuk memverifikasi keasliannya.
            </p>
          </div>
          <form onSubmit={handleVerify} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="text"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Kode verifikasi"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:bg-gray-400"
                disabled={loading}
              >
                {loading ? 'Memverifikasi...' : 'Verifikasi'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ResultModal show={showModal} onClose={() => setShowModal(false)} data={result} />
    </>
  );
}