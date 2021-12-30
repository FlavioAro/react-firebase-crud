import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
