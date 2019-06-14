import firebase from './firebase'
//import 'firebase/firestore'
require('firebase/firestore');

// Add the Firebase products that you want to use
require("firebase/auth");

var db = firebase.firestore();

export default db;
