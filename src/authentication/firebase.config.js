// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk1BOq591YCqXYsyvx0ziYaqkva9CDvlQ",
  authDomain: "simple-firebase-271f4.firebaseapp.com",
  projectId: "simple-firebase-271f4",
  storageBucket: "simple-firebase-271f4.firebasestorage.app",
  messagingSenderId: "968946657475",
  appId: "1:968946657475:web:35da77848b7616ebc85a76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
