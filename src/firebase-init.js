// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQnm9O-bTbpkfXKsuyzxRn_NTnCEctHBI",
  authDomain: "clone-5f042.firebaseapp.com",
  projectId: "clone-5f042",
  storageBucket: "clone-5f042.appspot.com",
  messagingSenderId: "579767099503",
  appId: "1:579767099503:web:0dddddd7732a53ee5c6d9a",
  // databaseURL: "Your firebase url"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
