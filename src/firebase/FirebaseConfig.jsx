// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYEKvWhBojezwEdA8qWFJDeZTG7Bg2VW0",
  authDomain: "react-ecomarce.firebaseapp.com",
  projectId: "react-ecomarce",
  storageBucket: "react-ecomarce.appspot.com",
  messagingSenderId: "746406368098",
  appId: "1:746406368098:web:f4b805d6bd5012d4fc123b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { auth, fireDB };

