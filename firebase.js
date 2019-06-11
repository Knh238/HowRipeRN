import * as firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './config.js';

firebase.initializeApp(firebaseConfig);

export default firebase;
