// firebase 🔥 this is all in firebase v9.0 👉
import { initializeApp, getApp, getApps } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBePcEJknGaWxvcbXXDBo7kO9MRKESIQn0",
    authDomain: "rookasinstagram.firebaseapp.com",
    projectId: "rookasinstagram",
    storageBucket: "rookasinstagram.appspot.com",
    messagingSenderId: "1081707398136",
    appId: "1:1081707398136:web:7235630c6cebffbd0d8c0d",
    measurementId: "G-T625TGREPR"
};

// initialize firebase
// if there are no apps, we initialize one, if there is, we get the first one
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// firestore initialization
const db = getFirestore();

// initialize storage
const storage = getStorage();

export { app, db, storage };

