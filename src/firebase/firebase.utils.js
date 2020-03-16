import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAIuZ5C-Olzx7olIokG_yJtBZ5l4F8jxxI',
  authDomain: 'star-labs-f6427.firebaseapp.com',
  databaseURL: 'https://star-labs-f6427.firebaseio.com',
  projectId: 'star-labs-f6427',
  storageBucket: 'star-labs-f6427.appspot.com',
  messagingSenderId: '482377903498',
  appId: '1:482377903498:web:413562056bd31feff4ac73',
  measurementId: 'G-VM55H2NESQ'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
