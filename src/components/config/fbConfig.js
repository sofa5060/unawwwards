import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBQbzLb5Xm2NxUFhDEz97UidTJ7wbBU9VQ",
    authDomain: "unaards-77b48.firebaseapp.com",
    databaseURL: "https://unaards-77b48.firebaseio.com",
    projectId: "unaards-77b48",
    storageBucket: "unaards-77b48.appspot.com",
    messagingSenderId: "443496692147",
    appId: "1:443496692147:web:0ad1651db68bf14ad9f3c6",
    measurementId: "G-ZZ6H2GSG5E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase