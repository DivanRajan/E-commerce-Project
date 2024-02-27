import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6-WUnGUCchWd_3dia768Sg7WhDmuP66o",
  authDomain: "sairamracks.firebaseapp.com",
  projectId: "sairamracks",
  storageBucket: "sairamracks.appspot.com",
  messagingSenderId: "273104581328",
  appId: "1:273104581328:web:609c9c5ebefb3673ad64d5",
  measurementId: "G-B431N81G0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
