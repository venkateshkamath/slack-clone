// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEZynAI8sqts2VzukVSoaPb0qCnbQIKUQ",
    authDomain: "slack-31721.firebaseapp.com",
    projectId: "slack-31721",
    storageBucket: "slack-31721.appspot.com",
    messagingSenderId: "352637321878",
    appId: "1:352637321878:web:9e3149006940b8d56ef8b7",
    measurementId: "G-G5S8BW1BEQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
