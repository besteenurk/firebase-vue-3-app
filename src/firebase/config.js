import firebase from "firebase/app";
import "firebase/firestore"
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC8kyNQ_nnpfEmSk5Ua9MUQzkItQPjP1FE",
    authDomain: "fir-vue-3-app.firebaseapp.com",
    projectId: "fir-vue-3-app",
    storageBucket: "fir-vue-3-app.appspot.com",
    messagingSenderId: "1062406189911",
    appId: "1:1062406189911:web:7f9841efd9e0a656ebc412",
    measurementId: "G-1GXFME5VEK"
};

firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth()
const firebaseFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export default {
    firebaseAuth, firebaseFirestore, timestamp
}