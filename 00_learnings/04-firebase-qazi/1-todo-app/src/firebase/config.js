// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyC10CAjGQ8HnGpxQU1PI-oIwbnyDlg3HHA",

  authDomain: "learning-1-todo-app-cp.firebaseapp.com",

  projectId: "learning-1-todo-app-cp",

  storageBucket: "learning-1-todo-app-cp.appspot.com",

  messagingSenderId: "491135659541",

  appId: "1:491135659541:web:22b14d45a81b44ac97a81c"

};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


const projectFirestore =firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    projectFirestore,
    timestamp
};