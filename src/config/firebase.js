import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyBq_3FFL_U_5HDtBNLmtgVkN1HxhghzYss",
  authDomain: "lsmt-website-4ecf7.firebaseapp.com",
  projectId: "lsmt-website-4ecf7",
  storageBucket: "lsmt-website-4ecf7.firebasestorage.app",
  messagingSenderId: "444927018345",
  appId: "1:444927018345:web:8c26d66d24e5c3e841e9f8",
  measurementId: "G-VSYB6CLNW1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};