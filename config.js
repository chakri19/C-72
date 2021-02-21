import firebase from "firebase"
require("@firebase/firestore")

//Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB43pdtQclEyyilmSSJ6U9nI-_ibRTBZA8",
    authDomain: "newsletter-27935.firebaseapp.com",
    projectId: "newsletter-27935",
    storageBucket: "newsletter-27935.appspot.com",
    messagingSenderId: "522855319667",
    appId: "1:522855319667:web:4eae6643eead3b20544206"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();