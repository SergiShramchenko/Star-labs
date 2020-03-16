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

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;