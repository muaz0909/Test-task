import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApYzgyLoMLjnfMiw7z1hIe5UWrZcbUlgI",
    authDomain: "nextapp-ef47a.firebaseapp.com",
    projectId: "nextapp-ef47a",
    storageBucket: "nextapp-ef47a.appspot.com",
    messagingSenderId: "472272086828",
    appId: "1:472272086828:web:7a2ae6305b0b7580f92e89"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
