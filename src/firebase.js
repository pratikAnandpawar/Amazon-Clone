import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAug4WUODesPF4Zgd4kk87Ey1xhMaM-Jo0",
  authDomain: "challenge-51b81.firebaseapp.com",
  projectId: "challenge-51b81",
  storageBucket: "challenge-51b81.appspot.com",
  messagingSenderId: "272897776539",
  appId: "1:272897776539:web:6af1c5469c7630e0acdf3e",
  measurementId: "G-23XWF64LHR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};