import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5UEkMsmscdQM3z-q1jBzDjxx53fS-Kw4",
    authDomain: "clone-39f35.firebaseapp.com",
    projectId: "clone-39f35",
    storageBucket: "clone-39f35.appspot.com",
    messagingSenderId: "906129102687",
    appId: "1:906129102687:web:553776c1d1a535825d08ea",
    measurementId: "G-X4LB69HEXD"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }