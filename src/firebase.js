// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjRqTBOWWzs7UnfkbOH7GywtVpwthcvto",
  authDomain: "clone-f8c9e.firebaseapp.com",
  projectId: "clone-f8c9e",
  storageBucket: "clone-f8c9e.appspot.com",
  messagingSenderId: "539582359240",
  appId: "1:539582359240:web:b4082cca7c131fe6a9a7fd",
  measurementId: "G-ZS6GY79GST",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };


// firebase.initializeApp(config);

// export const firestore = firebase.firestore();


// export default firebase;