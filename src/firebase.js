import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaXqshYrXbtORpn3MWi3SNCrPpQIUgUnI",
    authDomain: "facebook-clone-45e8c.firebaseapp.com",
    databaseURL: "https://facebook-clone-45e8c.firebaseio.com",
    projectId: "facebook-clone-45e8c",
    storageBucket: "facebook-clone-45e8c.appspot.com",
    messagingSenderId: "137439422888",
    appId: "1:137439422888:web:c521ea00f54694bdf1559d",
    measurementId: "G-FBFBS7CCZ1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;