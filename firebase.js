// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVl97oC0NVH6ylzo2iu9jHU9a1VuRjxnQ",
  authDomain: "hospital-project-ae190.firebaseapp.com",
  projectId: "hospital-project-ae190",
  storageBucket: "hospital-project-ae190.firebasestorage.app",
  messagingSenderId: "603669193956",
  appId: "1:603669193956:web:216ec8f018a841b01038f1",
  measurementId: "G-4809ZY7Z5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export {app,db}

// // Initialize Analytics (optional)
// export const analytics = getAnalytics(app);

// export default app;