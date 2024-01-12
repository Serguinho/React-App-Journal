import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiB9mEav94GATX7n9IiXnV_Lpu5rUJHmI",
    authDomain: "react-app-curso-83e80.firebaseapp.com",
    projectId: "react-app-curso-83e80",
    storageBucket: "react-app-curso-83e80.appspot.com",
    messagingSenderId: "323251528653",
    appId: "1:323251528653:web:4ff93e33a599c379d01a84"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
//const provider = new firebase.auth.EmailAuthProvider();
  
export{
  
   db,
  provider,
  firebase
   
    
  }