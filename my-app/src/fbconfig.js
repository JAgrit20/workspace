import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCWt5my1c-rxkh5iuR4Gelbj7aC_NEEC-I",
    authDomain: "test-project-manager-29f99.firebaseapp.com",
    projectId: "test-project-manager-29f99",
    storageBucket: "test-project-manager-29f99.appspot.com",
    messagingSenderId: "745837890603",
    appId: "1:745837890603:web:9c9686db8db12450e5ae6e",
    measurementId: "G-J870EDQ79E"
  };

  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()
  export const auth = firebase.auth()
  export default firebase