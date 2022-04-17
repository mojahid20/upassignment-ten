// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaqT6QR946DLl1bRodgsKQr85VeUbBaOM",
  authDomain: "my-assignment-ten.firebaseapp.com",
  projectId: "my-assignment-ten",
  storageBucket: "my-assignment-ten.appspot.com",
  messagingSenderId: "476974292289",
  appId: "1:476974292289:web:8ca6d3319c9a1af56dd5c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;