import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADaBIi7NOlJ0ov7iG1F99FpvIV01xY7to",
    authDomain: "mesa-de-servicio-19fe0.firebaseapp.com",
    projectId: "mesa-de-servicio-19fe0",
    storageBucket: "mesa-de-servicio-19fe0.appspot.com",
    messagingSenderId: "868699433738",
    appId: "1:868699433738:web:0dcdadb97430183ea128f3"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()

export {db,auth}
