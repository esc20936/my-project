import firebase from "firebase";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAktkCIUDF9VSBMXtopAWbfIW65g_EPLz8",
  authDomain: "healthforms-342118.firebaseapp.com",
  databaseURL: "https://healthforms-342118-default-rtdb.firebaseio.com",
  projectId: "healthforms-342118",
  storageBucket: "healthforms-342118.appspot.com",
  messagingSenderId: "835553252178",
  appId: "1:835553252178:web:35a404dac261162d8a208b",
};

// Initialize Firebase
const db = firebase.firestore();

export default {
  firebase,
  db,
};
