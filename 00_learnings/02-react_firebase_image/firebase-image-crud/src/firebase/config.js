// Import the functions you need from the SDKs you need




// import {firebase} from 'firebase/app';
import firebase from 'firebase/compat/app';
// import {getStorage} from 'firebase/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDGWGNFWK0L1W_WC4q1J_zNKLsa-RGSLmM",

  authDomain: "learning-firebase-img-crud.firebaseapp.com",

  projectId: "learning-firebase-img-crud",

  storageBucket: "learning-firebase-img-crud.appspot.com",

  messagingSenderId: "792096350595",

  appId: "1:792096350595:web:0086e1d79a646db6dc56b6"

};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore =firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    projectStorage,
    projectFirestore,
    timestamp
};