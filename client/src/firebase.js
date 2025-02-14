// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // not process cuz we are using vite
  authDomain: "mern-blog-a6b67.firebaseapp.com",
  projectId: "mern-blog-a6b67",
  storageBucket: "mern-blog-a6b67.firebasestorage.app",
  messagingSenderId: "574445009924",
  appId: "1:574445009924:web:e5a9048f119fb56dad4951"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
