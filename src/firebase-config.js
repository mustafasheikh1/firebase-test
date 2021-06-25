import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
 
};


firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export { db }