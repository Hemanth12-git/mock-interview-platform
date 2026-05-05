// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMxA2T9gKfDzHABGRWgj7cBmCRRvnHoNY",
  authDomain: "mock-interview-project12.firebaseapp.com",
  projectId: "mock-interview-project12",
  storageBucket: "mock-interview-project12.firebasestorage.app",
  messagingSenderId: "303514473602",
  appId: "1:303514473602:web:1e5b07468d83f0f28a109b",
  measurementId: "G-GLB7PRZ6P6"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
