import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCCd6oy04VNxK6VEL3Xhe38aXDsVpbCCgI",
    authDomain: "e-ride-stage-4-1e3fc.firebaseapp.com",
    projectId: "e-ride-stage-4-1e3fc",
    storageBucket: "e-ride-stage-4-1e3fc.appspot.com",
    messagingSenderId: "56402817316",
    appId: "1:56402817316:web:9bee4e75916830801e83b1"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
