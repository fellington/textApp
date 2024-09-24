// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeiLBCjONtfiKopwHFun80RoOS4gwXLFY",
  authDomain: "textbackend-48c6b.firebaseapp.com",
  projectId: "textbackend-48c6b",
  storageBucket: "textbackend-48c6b.appspot.com",
  messagingSenderId: "733136076760",
  appId: "1:733136076760:web:e9aaec69811ef0e8ed7cad"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);