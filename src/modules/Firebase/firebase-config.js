import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "music-player-69865.firebaseapp.com",
    projectId: "music-player-69865",
    storageBucket: "music-player-69865.appspot.com",
    messagingSenderId: "837123490445",
    appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
