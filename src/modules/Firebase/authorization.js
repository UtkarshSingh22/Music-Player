import { app } from "./firebase-config";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    getAdditionalUserInfo,
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
    const signInBtn = document.querySelector(".signIn");
    const signOutBtn = document.querySelector(".signOut");

    if (user) {
        let profilePicUrl = getProfilePicUrl();
        let userName = getUserName();

        name.textContent = userName;
        userPicture.src = profilePicUrl;

        name.removeAttribute("hidden");
        userPicture.removeAttribute("hidden");
        signOutBtn.removeAttribute("hidden");

        signInBtn.style.display = "none";
    } else {
        name.setAttribute("hidden", "true");
        userPicture.setAttribute("hidden", "true");
        signOutBtn.setAttribute("hidden", "true");

        signInBtn.style.display = "flex";
    }
}

const addAuth = () => {
    const signInBtn = document.querySelector(".signIn");
    const signOutBtn = document.querySelector(".signOut");

    signInBtn.addEventListener("click", signIn);
    signOutBtn.addEventListener("click", signOutUser);

    initFirebaseAuth();
};

export { addAuth, isUserSignedIn };
