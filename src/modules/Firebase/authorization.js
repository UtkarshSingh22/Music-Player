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

function authStateObserver(user) {
    const name = document.querySelector(".userName");
    const userPicture = document.querySelector(".userPic");

    if (user) {
        let profilePicUrl = getProfilePicUrl();
        let userName = getUserName();

        userPicture.style.backgroundImage =
            "url(" + addSizeToGoogleProfilePic(profilePicUrl) + ")";
        name.textContent = userName;

        name.removeAttribute("hidden");
        userPicture.removeAttribute("hidden");
        signOutBtn.removeAttribute("hidden");

        signInBtn.setAttribute("hidden", "true");
    } else {
        name.setAttribute("hidden", "true");
        userPicture.setAttribute("hidden", "true");
        signOutBtn.setAttribute("hidden", "true");

        signInBtn.removeAttribute("hidden");
    }
}

function addSizeToGoogleProfilePic(url) {
    if (
        url.indexOf("googleusercontent.com") !== -1 &&
        url.indexOf("?") === -1
    ) {
        return url + "?sz=150";
    }
    return url;
}

const addAuth = () => {
    const signInBtn = document.querySelector(".signIn");
    const signOutBtn = document.querySelector(".signOut");

    signInBtn.addEventListener("click", signIn);
    signOutBtn.addEventListener("click", signOutUser);

    initFirebaseAuth();
};

export default addAuth;
