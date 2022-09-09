import { initializeApp } from 'firebase/app';

import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,
        signInWithEmailAndPassword} from 'firebase/auth'

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

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);



  //database
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {

    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;

  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
  