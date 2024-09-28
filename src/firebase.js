// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBORO5Jfg7nXgMXmNloJZ4ZFeiBQ42ndkE",
  authDomain: "simvictus-d42ed.firebaseapp.com",
  projectId: "simvictus-d42ed",
  storageBucket: "simvictus-d42ed.appspot.com",
  messagingSenderId: "47831665391",
  appId: "1:47831665391:web:e3656072487718b1a0291a",
  measurementId: "G-W2ZNPC81CV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);