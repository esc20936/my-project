// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAktkCIUDF9VSBMXtopAWbfIW65g_EPLz8",
  authDomain: "healthforms-342118.firebaseapp.com",
  databaseURL: "https://healthforms-342118-default-rtdb.firebaseio.com",
  projectId: "healthforms-342118",
  storageBucket: "healthforms-342118.appspot.com",
  messagingSenderId: "835553252178",
  appId: "1:835553252178:web:35a404dac261162d8a208b"
};

// Initialize Firebase
let app;
if(firebase.app.length===0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}


const auth = firebase.auth();
export {auth};