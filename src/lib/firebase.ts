// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1dGrArHTtXONVPdGaNbyO6Ze2Ql--LlQ",
  authDomain: "movie-friend-a7183.firebaseapp.com",
  projectId: "movie-friend-a7183",
  storageBucket: "movie-friend-a7183.appspot.com",
  messagingSenderId: "1042905530426",
  appId: "1:1042905530426:web:059bd88f4b87fdf07fb503"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth }