import { initializeApp } from 'firebase/app';

import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'



//auth

const firebaseConfig = {
    apiKey: "AIzaSyBD0xy5n2fFYi_BUB0uyqH_tyRwOJk1-2k",
    authDomain: "my-ecomm-da22b.firebaseapp.com",
    projectId: "my-ecomm-da22b",
    storageBucket: "my-ecomm-da22b.appspot.com",
    messagingSenderId: "255916108468",
    appId: "1:255916108468:web:a126f32c2676777a3a85e1"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);



  //database
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

  };