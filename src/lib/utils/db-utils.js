// lib/utils/db-utils.js
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';

// Fungsi untuk mencari data keaslian emas berdasarkan kode
export const getAuthenticityData = async (code) => {
  try {
    const q = query(collection(db, "authenticity"), where("code", "==", code));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null; // Data tidak ditemukan
    }

    // Ambil data dari dokumen pertama yang cocok
    const docData = querySnapshot.docs[0].data();
    return docData;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
};