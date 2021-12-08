// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAApBieqSmMsQono9B9YO9zCP4g5vdOfjc",
    authDomain: "instagram-cloned-next.firebaseapp.com",
    projectId: "instagram-cloned-next",
    storageBucket: "instagram-cloned-next.appspot.com",
    messagingSenderId: "329358717778",
    appId: "1:329358717778:web:fddbe7f4ed1d0becf0408b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage };