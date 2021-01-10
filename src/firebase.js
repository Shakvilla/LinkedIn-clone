import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBDjcOFtR2GK66JMiqsoxzWDrQAitmEeE",
    authDomain: "linkedin-clone-aeebf.firebaseapp.com",
    projectId: "linkedin-clone-aeebf",
    storageBucket: "linkedin-clone-aeebf.appspot.com",
    messagingSenderId: "918922912880",
    appId: "1:918922912880:web:e41a713a425324d8e680b5",
    measurementId: "G-SHC7C5DV91"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 