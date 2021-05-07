import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC0p7e5E3hUFuSvZ3kIkY--ivX25kn_3L0",
    authDomain: "project-management-9394a.firebaseapp.com",
    projectId: "project-management-9394a",
    storageBucket: "project-management-9394a.appspot.com",
    messagingSenderId: "328199597663",
    appId: "1:328199597663:web:b1438da9eb556a66baf5ea",
    measurementId: "G-T7STYJT21B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
