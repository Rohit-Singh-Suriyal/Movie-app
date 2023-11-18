// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJc3CZ80Z46bGu4SN5m4PbSmGJLEPdLfs",
  authDomain: "movieapp-9a3b4.firebaseapp.com",
  projectId: "movieapp-9a3b4",
  storageBucket: "movieapp-9a3b4.appspot.com",
  messagingSenderId: "129663809956",
  appId: "1:129663809956:web:dccb34c22cf0a14670e931",
  measurementId: "G-B5V9JBCR24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);