// pages/api/produk/list.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const products = [
  { id: 1, name: 'Emas Batangan', weight: 10, image: '/images/gold-bar.png' },
  { id: 2, name: 'Koin Emas', weight: 5, image: '/images/gold-coin.png' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}