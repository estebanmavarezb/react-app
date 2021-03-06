import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({

    apiKey: "AIzaSyAMjPAhvOH8wOVBE5El9xzS2DwQla_7K_Q",
    authDomain: "sushibloba.firebaseapp.com",
    projectId: "sushibloba",
    storageBucket: "sushibloba.appspot.com",
    messagingSenderId: "1002391363480",
    appId: "1:1002391363480:web:d4710bebf6036fbe8395ed",
    measurementId: "G-DCBR12L7ZR"
    
});
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}