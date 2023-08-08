// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEKpJjCv7mwegN94KiEwrS7ZYgxbVIKks",
  authDomain: "deckason-autos-9c141.firebaseapp.com",
  projectId: "deckason-autos-9c141",
  storageBucket: "deckason-autos-9c141.appspot.com",
  messagingSenderId: "961775201743",
  appId: "1:961775201743:web:09cc7c698fa5bd046e76ba",
  measurementId: "G-YZSP549ERJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Authentication
export const authentication = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore()
export const collectionRef = collection(db, "Cars")