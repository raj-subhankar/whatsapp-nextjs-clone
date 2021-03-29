import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABOB0L4P8Bj376l3aziVxBbemEx7cj7Nk",
    authDomain: "whatsapp-clone2-bc5be.firebaseapp.com",
    projectId: "whatsapp-clone2-bc5be",
    storageBucket: "whatsapp-clone2-bc5be.appspot.com",
    messagingSenderId: "868980310684",
    appId: "1:868980310684:web:6d2ceeb44fa24a1a3f2359"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };