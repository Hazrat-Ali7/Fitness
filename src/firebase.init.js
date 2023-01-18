 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUuOISs0Z6saRWLTIlu77pv6nL4EnuqVg",
  authDomain: "hazrat-fitness.firebaseapp.com",
  projectId: "hazrat-fitness",
  storageBucket: "hazrat-fitness.appspot.com",
  messagingSenderId: "100518942528",
  appId: "1:100518942528:web:3766d0bfafa5c8903e4ca5",
  measurementId: "G-3Q7XFCQQ90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;