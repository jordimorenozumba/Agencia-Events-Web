
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// CONFIGURACIÓN DE TU PROYECTO FIREBASE

const firebaseConfig = {
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC77EcjuTUylnSbRbQtTmdDGT73cIo_nQI",
  authDomain: "agencia-eventos-web.firebaseapp.com",
  projectId: "agencia-eventos-web",
  storageBucket: "agencia-eventos-web.firebasestorage.app",
  messagingSenderId: "870287261723",
  appId: "1:870287261723:web:857ebb7f11dea8a81038be",
  measurementId: "G-H2F2WZDP0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
};

// INICIAR FIREBASE

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ENVIAR FORMULARIO A FIRESTORE

export async function sendContact(data) {
  return await addDoc(collection(db, "contact_leads"), {
    name: data.name,
    email: data.email,
    interest: data.interest,
    message: data.message,
    createdAt: serverTimestamp(),
    status: "nuevo"
  });
}
