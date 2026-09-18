import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from "firebase/auth";

import { auth } from "../lib/firebase";

const googleProvider = new GoogleAuthProvider();

export const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
};

export const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(
        auth,
        email,
        password
    );
};

export const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
};

export const logout = () => {
    return signOut(auth);
};