
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAjSEtl8MhzDX68RyZ31j-2rPFq70o767E",
  authDomain: "prepwise-interview-c2cd9.firebaseapp.com",
  projectId: "prepwise-interview-c2cd9",
  storageBucket: "prepwise-interview-c2cd9.firebasestorage.app",
  messagingSenderId: "6174877733",
  appId: "1:6174877733:web:a14e29bd0dcb9bd582b7cc",
  measurementId: "G-KJE8WN01CE"
};

// Initialize Firebase
const app =  !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);