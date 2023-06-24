// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAR0-fzvibidlPpPNUp0NYe31urttTI9H0",
    authDomain: "netflix-clone-project-73cab.firebaseapp.com",
    projectId: "netflix-clone-project-73cab",
    storageBucket: "netflix-clone-project-73cab.appspot.com",
    messagingSenderId: "447132765425",
    appId: "1:447132765425:web:411bd32d645ad1484f6d50",
    measurementId: "G-QBXPMEDF5Q"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export {auth};
  export default db;