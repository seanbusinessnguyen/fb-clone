//Needed more permissions 2:57:42 - swapped to my own firebase project

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0NocV7K9xNr8MfDa7i0T6nf0olnGfT1k",
  authDomain: "testloginpc-167f3.firebaseapp.com",
  databaseURL: "https://testloginpc-167f3.firebaseio.com",
  projectId: "testloginpc-167f3",
  storageBucket: "testloginpc-167f3.appspot.com",
  messagingSenderId: "389980868761",
  appId: "1:389980868761:web:cbf4b5a6c1826a9e522808",
  measurementId: "G-9YFS03TKMW"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  const provider = new firebase.auth.GoogleAuthProvider(); //Tells firebase we want google login service

  export { auth, provider, firebaseApp }; //This can be asked for
  export default db; //This is always