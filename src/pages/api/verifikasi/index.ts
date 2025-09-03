// pages/api/verifikasi/[kode].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuthenticityData } from '../../../lib/utils/db-utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { kode } = req.query;

  if (typeof kode !== 'string' || !kode) {
    return res.status(400).json({ success: false, message: 'Kode verifikasi tidak valid.' });
  }

  const result = await getAuthenticityData(kode);

  if (!result) {
    return res.status(404).json({ success: false, message: 'Kode verifikasi tidak ditemukan.' });
  }

  return res.status(200).json({ success: true, data: result });
}