import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

const config = {
apiKey: "AIzaSyA65SBUXEsz4gdPxIzyD3jTCJFZrxN5D5Y",
authDomain: "instagram-clone-2786a.firebaseapp.com",
projectId: "instagram-clone-2786a",
storageBucket: "instagram-clone-2786a.appspot.com",
messagingSenderId: "615185666712",
appId: "1:615185666712:web:82f30e3925a6d6fd9136ed"
};

const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;

//seedDatabase(firebase);


export {firebase , FieldValue};