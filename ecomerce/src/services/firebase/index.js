// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm4eb_S3l-LVO4RQ8o-S-3NsvBoSge7c0",
  authDomain: "ecomerce-rodrigotovar.firebaseapp.com",
  projectId: "ecomerce-rodrigotovar",
  storageBucket: "ecomerce-rodrigotovar.firebasestorage.app",
  messagingSenderId: "761986319897",
  appId: "1:761986319897:web:3a8e1427e9cac6b98bcc88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)