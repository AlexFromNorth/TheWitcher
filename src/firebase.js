import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "@firebase/app";

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAhWhE2WlcigNjt_jZGMrD1Mxm0e-pDqUg",
  authDomain: "petproject-3e098.firebaseapp.com",
  projectId: "petproject-3e098",
  storageBucket: "petproject-3e098.appspot.com",
  messagingSenderId: "764926793016",
  appId: "1:764926793016:web:a5ad1c09471c64fb3a9dcd",
  measurementId: "G-D23XZQLRM2",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
