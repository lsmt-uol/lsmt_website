// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq_3FFL_U_5HDtBNLmtgVkN1HxhghzYss",
  authDomain: "lsmt-website-4ecf7.firebaseapp.com",
  projectId: "lsmt-website-4ecf7",
  storageBucket: "lsmt-website-4ecf7.firebasestorage.app",
  messagingSenderId: "444927018345",
  appId: "1:444927018345:web:8c26d66d24e5c3e841e9f8",
  measurementId: "G-VSYB6CLNW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);