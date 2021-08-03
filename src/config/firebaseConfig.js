import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyDDR6cYmfZVe05Bpx43dhrPMSljlkL1F5E",
    authDomain: "deadlinestab.firebaseapp.com",
    projectId: "deadlinestab",
    storageBucket: "deadlinestab.appspot.com",
    messagingSenderId: "823441725884",
    appId: "1:823441725884:web:eab53a27429c4e02ae33b9"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;