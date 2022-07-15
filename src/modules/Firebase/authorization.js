import { app } from "./firebase-config";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import loadHome from "../home";

async function signIn() {
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
}

function signOutUser() {
    signOut(getAuth());
    loadHome();
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
    var alanBtnInstance = alanBtn({
        key: "d62f1035b09dc64b1c55dcab41e5a0aa2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: function (commandData) {
            if (commandData.command === "doAuth") {
                signIn();
            }
            if (commandData.command === "Logout") {
                signOutUser();
            }
        },
        rootEl: document.getElementById("alan-btn"),
    });

    const signInBtn = document.querySelector(".signIn");
    const signOutBtn = document.querySelector(".signOut");

    signInBtn.addEventListener("click", signIn);
    signOutBtn.addEventListener("click", signOutUser);

    initFirebaseAuth();
};

export { addAuth, isUserSignedIn };
