// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBsW_vVMKw8LtgwwGmwDWI0lOHN6LYxFwY",
  authDomain: "samplestorage123-dfa6a.firebaseapp.com",
  projectId: "samplestorage123-dfa6a",
  storageBucket: "samplestorage123-dfa6a.firebasestorage.app",
  messagingSenderId: "993735741385",
  appId: "1:993735741385:web:6e1fcd186af660ce592218",
  measurementId: "G-4F3HC0B9CW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);