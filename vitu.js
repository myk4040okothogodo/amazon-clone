npm install firebase
Then, initialize Firebase and begin using the SDKs for the products you'd like to use.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7am6Moeqia05ep-TxTI_d-mSCPAeGxz8",
  authDomain: "amzn-2-yt-13af5.firebaseapp.com",
  projectId: "amzn-2-yt-13af5",
  storageBucket: "amzn-2-yt-13af5.appspot.com",
  messagingSenderId: "459303769236",
  appId: "1:459303769236:web:c1ba73ac87af52d3b9d081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



