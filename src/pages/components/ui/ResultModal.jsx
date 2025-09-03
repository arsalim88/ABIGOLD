// components/ui/ResultModal.jsx
import React from 'react';

const ResultModal = ({ show, onClose, data }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
      <div className="relative p-8 bg-white w-96 max-w-md m-auto flex-col flex rounded-lg shadow-lg">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          &times;
        </button>
        <h3 className="text-xl font-bold mb-4">Hasil Verifikasi</h3>
        {data.success ? (
          <div>
            <p className="text-green-600 font-semibold">✅ Kode Ditemukan & Emas Asli!</p>
            <p><strong>Seri:</strong> {data.data.code}</p>
            <p><strong>Berat:</strong> {data.data.weight} gram</p>
            <p><strong>Tanggal Produksi:</strong> {data.data.productionDate}</p>
          </div>
        ) : (
          <p className="text-red-600 font-semibold">❌ {data.message}</p>
        )}
      </div>
    </div>
  );
};

export default ResultModal;