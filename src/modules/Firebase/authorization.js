import { app } from "./firebase-config";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";

async function signIn() {
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
}

function signOutUser() {
    signOut(getAuth());
}

function initFirebaseAuth() {
    onAuthStateChanged(getAuth(), authStateObserver);
}

function getProfilePicUrl() {
    return getAuth().currentUser.photoURL || "/icons/person.svg";
}

function getUserName() {
    return getAuth().currentUser.displayName;
}

function isUserSignedIn() {
    return !!getAuth().currentUser;
}
