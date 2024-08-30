// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbNeR4310hY2sMQBkSNzsiWmqRAk1zhWk",
  authDomain: "netflixgpt-70ef8.firebaseapp.com",
  projectId: "netflixgpt-70ef8",
  storageBucket: "netflixgpt-70ef8.appspot.com",
  messagingSenderId: "66576669953",
  appId: "1:66576669953:web:75228ba108e2b19431cf00",
  measurementId: "G-17L8S90TTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
