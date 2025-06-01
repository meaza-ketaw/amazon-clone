// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuGFbYvqSscbxehCnrUdPTJ7syi5PDfkE",
  authDomain: "clone-a515b.firebaseapp.com",
  projectId: "clone-a515b",
  storageBucket: "clone-a515b.firebasestorage.app",
  messagingSenderId: "406197510903",
  appId: "1:406197510903:web:d6d6430e94054e5d3029f2",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
