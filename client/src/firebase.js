// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-11a09.firebaseapp.com",
  projectId: "real-estate-11a09",
  storageBucket: "real-estate-11a09.appspot.com",
  messagingSenderId: "254251153730",
  appId: "1:254251153730:web:10ce30c336955b738cf0db",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
