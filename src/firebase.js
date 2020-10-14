import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAR4nDAPMWsjUQhj-TSDfTQz3n0_hLNn0Y",
    authDomain: "imessage-clone-82f9c.firebaseapp.com",
    databaseURL: "https://imessage-clone-82f9c.firebaseio.com",
    projectId: "imessage-clone-82f9c",
    storageBucket: "imessage-clone-82f9c.appspot.com",
    messagingSenderId: "798291095743",
    appId: "1:798291095743:web:0f8ce75d3fcad17a78d60a",
    measurementId: "G-SHVWLV77GV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;