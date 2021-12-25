// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdYeKH-_7WxUlG851OTgBVTk6bgckaEP4",
  authDomain: "personalportfoliopitcher.firebaseapp.com",
  projectId: "personalportfoliopitcher",
  storageBucket: "personalportfoliopitcher.appspot.com",
  messagingSenderId: "850672815355",
  appId: "1:850672815355:web:c9727403617ed292af745e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();