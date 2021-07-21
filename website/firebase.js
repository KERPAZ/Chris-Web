import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const fire = firebase.initializeApp({
  apiKey: "AIzaSyARbBEWSnSYw9ce09znl-jShm2ruS60Dzg",
  authDomain: "chris-web-d1226.firebaseapp.com",
  projectId: "chris-web-d1226",
  storageBucket: "chris-web-d1226.appspot.com",
  messagingSenderId: "987300165616",
  appId: "1:987300165616:web:82296c8384525dcb5f0f35",
  measurementId: "G-WZ2G1QFDLM"
});

export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};
