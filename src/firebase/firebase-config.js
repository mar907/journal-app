import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAOfoQbWZHOQ3tJ9kZ7z0Wo7tKGc3qrkaM",
    authDomain: "react-app-cursos-830d1.firebaseapp.com",
    projectId: "react-app-cursos-830d1",
    storageBucket: "react-app-cursos-830d1.appspot.com",
    messagingSenderId: "904913865231",
    appId: "1:904913865231:web:692163a281a17413b7717a"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}