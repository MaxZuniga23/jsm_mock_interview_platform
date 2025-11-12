import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgtCkqEzwzufW8RTWrtNPf8pK6Wt1WL44",
  authDomain: "prepwise-de1d7.firebaseapp.com",
  projectId: "prepwise-de1d7",
  storageBucket: "prepwise-de1d7.firebasestorage.app",
  messagingSenderId: "296857492091",
  appId: "1:296857492091:web:867ed0d982fe34ffaba0de",
  measurementId: "G-VYHEFXGZW9"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth= getAuth(app);
export const db = getFirestore(app)