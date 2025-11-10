// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEiIyVltPNcHqar14FfPq2cnofCwgKaX0",
  authDomain: "prepw-27d06.firebaseapp.com",
  projectId: "prepw-27d06",
  storageBucket: "prepw-27d06.firebasestorage.app",
  messagingSenderId: "577018076199",
  appId: "1:577018076199:web:0b84f8000dbac15b5ec202",
  measurementId: "G-15ZMK6CFW1"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);