import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC4otNNBDy9c7gtG9XWzvoKGkw1G8BD2q0",
    authDomain: "slack-clone-challange-c86e3.firebaseapp.com",
    projectId: "slack-clone-challange-c86e3",
    storageBucket: "slack-clone-challange-c86e3.appspot.com",
    messagingSenderId: "82777229766",
    appId: "1:82777229766:web:23a5c829f55d887ceb4ac7",
    measurementId: "G-0Q284Y3M3F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db;