/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-38caa.firebaseapp.com",
  projectId: "mern-blog-38caa",
  storageBucket: "mern-blog-38caa.appspot.com",
  messagingSenderId: "206348804476",
  appId: "1:206348804476:web:36753ab81a5f7bb6ab04f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
