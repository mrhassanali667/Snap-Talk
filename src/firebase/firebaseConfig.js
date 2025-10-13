import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCJqkYPrnIjlLF5UqiibRb42GWpho6M0CE",
    authDomain: "snap-talk-f961b.firebaseapp.com",
    projectId: "snap-talk-f961b",
    storageBucket: "snap-talk-f961b.firebasestorage.app",
    messagingSenderId: "1011091844571",
    appId: "1:1011091844571:web:db9fb4d093faae038d0bfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth ,db}
