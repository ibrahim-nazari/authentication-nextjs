// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBynk70dwvH57ztcT5PLJPz3iQMp5lBySU",
    authDomain: "authentication-nextjs.firebaseapp.com",
    projectId: "authentication-nextjs",
    storageBucket: "authentication-nextjs.appspot.com",
    messagingSenderId: "79680255909",
    appId: "1:79680255909:web:ee48abd3efe4115bb1da4c",
    measurementId: "G-JWX2GQ720C"
  };
  
  

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app();
 }
  export const provider = new firebase.auth.GoogleAuthProvider();
  export default firebase