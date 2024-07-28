// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv5m4WFiomkRR6mKcbdFexFy1tDCMDqNg",
  authDomain: "desafio-firebase-66907.firebaseapp.com",
  projectId: "desafio-firebase-66907",
  storageBucket: "desafio-firebase-66907.appspot.com",
  messagingSenderId: "913752225544",
  appId: "1:913752225544:web:5bd83196a3722a4b561ebd"
};

let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
}

const db = getFirestore(firebaseApp);
export { db };