import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAV8646yOUcDgKiaGa7wHu3aHMFiJVeCpg",
  authDomain: "whatsapp-ffd42.firebaseapp.com",
  projectId: "whatsapp-ffd42",
  storageBucket: "whatsapp-ffd42.appspot.com",
  messagingSenderId: "343150008411",
  appId: "1:343150008411:web:cb8da48461b21086c1c77e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
