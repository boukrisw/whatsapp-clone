import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAk9imEi-68XLE9QE_tVIBE7xjxcpsjGms",
  authDomain: "whatsapp-clone97.firebaseapp.com",
  databaseURL: "https://whatsapp-clone97.firebaseio.com",
  projectId: "whatsapp-clone97",
  storageBucket: "whatsapp-clone97.appspot.com",
  messagingSenderId: "20442510586",
  appId: "1:20442510586:web:220ebda54eaf0632f14543",
  measurementId: "G-QVKCLX8GCK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
