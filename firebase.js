// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5B2YdTI-7RbjOHn4gGmZAE5DFS1qP3yA",
  authDomain: "duozindb.firebaseapp.com",
  projectId: "duozindb",
  storageBucket: "duozindb.appspot.com",
  messagingSenderId: "72880726709",
  appId: "1:72880726709:web:079351f1d46b0c54a194fc",
  measurementId: "G-TH9TWJF6VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();