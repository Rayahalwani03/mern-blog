// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // ✅ Use import.meta.env,
  authDomain: "mern-blog-961c9.firebaseapp.com",
  projectId: "mern-blog-961c9",
  storageBucket: "mern-blog-961c9.firebasestorage.app",
  messagingSenderId: "161719093186",
  appId: "1:161719093186:web:66885fffe671330090385b",
  measurementId: "G-99G9D43NN9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

