// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxDWw20XfjSKoHXyCejY6djFIDTFFslMA",
    authDomain: "noche-class.firebaseapp.com",
    projectId: "noche-class",
    storageBucket: "noche-class.firebasestorage.app",
    messagingSenderId: "963156083598",
    appId: "1:963156083598:web:56ad060c9072a2168bdadf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);    