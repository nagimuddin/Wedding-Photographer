// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgOhj0v2w2v06DREfJe-2usDYDuQ0UOTM",
  authDomain: "wedding-photographer-5943c.firebaseapp.com",
  projectId: "wedding-photographer-5943c",
  storageBucket: "wedding-photographer-5943c.appspot.com",
  messagingSenderId: "478757959172",
  appId: "1:478757959172:web:beb60a88f088bf3b292751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;