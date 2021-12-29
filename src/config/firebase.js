import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyC1s_MIucbtwVHGgLAeOQgKKMGI-FLcRGM",
  authDomain: "react-contact-fae17.firebaseapp.com",
  databaseURL: "https://react-contact-fae17-default-rtdb.firebaseio.com",
  projectId: "react-contact-fae17",
  storageBucket: "react-contact-fae17.appspot.com",
  messagingSenderId: "843953336059",
  appId: "1:843953336059:web:094ef2692042f81fc94a5e",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();