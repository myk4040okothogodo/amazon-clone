import firebase from "firebase";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7am6Moeqia05ep-TxTI_d-mSCPAeGxz8",
  authDomain: "amzn-2-yt-13af5.firebaseapp.com",
  projectId: "amzn-2-yt-13af5",
  storageBucket: "amzn-2-yt-13af5.appspot.com",
  messagingSenderId: "459303769236",
  appId: "1:459303769236:web:c1ba73ac87af52d3b9d081"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

//const db = getFirestore(app);
const db = app.firestore();

export default db;
