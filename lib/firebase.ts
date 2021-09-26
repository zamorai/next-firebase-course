import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyANXR-NVc8LS-jgaDo9sQhAzM_nmWg9PSM",
    authDomain: "nextfire-app-33a10.firebaseapp.com",
    projectId: "nextfire-app-33a10",
    storageBucket: "nextfire-app-33a10.appspot.com",
    messagingSenderId: "881962277744",
    appId: "1:881962277744:web:8a7793f1789d6b19d70db5",
    measurementId: "G-0HKCD7ZK5H"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();