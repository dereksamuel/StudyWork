import firebase from "firebase";
// Required for side-effects
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/storage";
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDznNMiiIE_F_dc56LHkq3V6PvK7TVp8io",
    authDomain: "myworkspace-b1621.firebaseapp.com",
    databaseURL: "https://myworkspace-b1621.firebaseio.com",
    projectId: "myworkspace-b1621",
    storageBucket: "myworkspace-b1621.appspot.com",
    messagingSenderId: "232404098238",
    appId: "1:232404098238:web:a5a865336f1550077d52ef",
    measurementId: "G-BDGEHTHVHK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const fb = firebase;
