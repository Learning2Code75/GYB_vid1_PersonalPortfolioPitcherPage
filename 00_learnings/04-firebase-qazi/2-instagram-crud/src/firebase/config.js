// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';



// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAdK0QWDkz9Stn5Y_kbe6aG4mMalIgk_Gg",

  authDomain: "learning-2-instagram-crud-cp.firebaseapp.com",

  projectId: "learning-2-instagram-crud-cp",

  storageBucket: "learning-2-instagram-crud-cp.appspot.com",

  messagingSenderId: "817217624509",

  appId: "1:817217624509:web:01f993883b8ebc6ab01ad4"

};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);


const db =firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();
const storage = firebase.storage();


export {
    db,
    timestamp,
    auth,
    storage
};