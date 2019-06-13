import * as firebase from 'firebase';
import firebaseConfig from './config.js';
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig);


export default firebase;
