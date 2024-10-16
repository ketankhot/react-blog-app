// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f461f.firebaseapp.com",
  projectId: "mern-blog-f461f",
  storageBucket: "mern-blog-f461f.appspot.com",
  messagingSenderId: "959173208312",
  appId: "1:959173208312:web:5fe873e112a763c0cdf30d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
