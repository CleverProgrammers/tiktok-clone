import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMh678yYIU2sOODl6AXXVJr_27jvDLnpk",
  authDomain: "tik-tok-clone-eb635.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-eb635.firebaseio.com",
  projectId: "tik-tok-clone-eb635",
  storageBucket: "tik-tok-clone-eb635.appspot.com",
  messagingSenderId: "602358408631",
  appId: "1:602358408631:web:a32f1830ccc2d942f2f432",
  measurementId: "G-38YHL3X30F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
