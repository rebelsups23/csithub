import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADpsg-ePJRL_uyf6F5HDqzybSFWiE0LlE",
  authDomain: "thecsithub.firebaseapp.com",
  databaseURL: "https://thecsithub.firebaseio.com",
  projectId: "thecsithub",
  storageBucket: "thecsithub.appspot.com",
  messagingSenderId: "252736713417",
  appId: "1:252736713417:web:f825817a809ac5ef9dd318",
  measurementId: "G-8NH88XZJ35",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectStorage, projectFirestore, provider, timestamp };
