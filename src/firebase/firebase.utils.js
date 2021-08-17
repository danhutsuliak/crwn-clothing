import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCCh-_2enaj48inYV9yWzdD55xyKjnkH3k",
  authDomain: "crwn-db-e7a25.firebaseapp.com",
  projectId: "crwn-db-e7a25",
  storageBucket: "crwn-db-e7a25.appspot.com",
  messagingSenderId: "911209052867",
  appId: "1:911209052867:web:f98088c02502c9d66e4076",
  measurementId: "G-LCHS98CLP0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
