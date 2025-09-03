// lib/utils/auth-utils.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/firebase'; // Impor konfigurasi Anda

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fungsi untuk mendaftar (sign up) pengguna baru
export const signUpWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return { success: true, user };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Fungsi untuk masuk (sign in) pengguna yang sudah terdaftar
export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return { success: true, user };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Fungsi untuk keluar (sign out) pengguna
export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};