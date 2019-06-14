import * as firebase from 'firebase';
import { firebaseConfig } from './config';
import 'firebase/firestore'

//require('firebase/firestore');

firebase.initializeApp(firebaseConfig);

//export var db = firebase.firestore();

export default firebase;
