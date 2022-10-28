// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCywyCW_qpiY7PurQow2p8mdiYhBhcWcZs",
  authDomain: "duozindb-a7753.firebaseapp.com",
  projectId: "duozindb-a7753",
  storageBucket: "duozindb-a7753.appspot.com",
  messagingSenderId: "645864730053",
  appId: "1:645864730053:web:580b416a3689fa3ad02fac"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };