import * as firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: "rhenapp",
    storageBucket: "",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };
  
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseDB = firebaseApp.database();
const firebaseDbTimeStamp = firebase.database.ServerValue.TIMESTAMP

export {
    firebaseDB,
    firebaseDbTimeStamp
}

export default firebaseApp;