import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6nOD1hIYQk6FNKITCNQ4vtf3N7xa9Coc",
  authDomain: "wheres-waldo-be5e0.firebaseapp.com",
  projectId: "wheres-waldo-be5e0",
  storageBucket: "wheres-waldo-be5e0.appspot.com",
  messagingSenderId: "903098388381",
  appId: "1:903098388381:web:2b761184ba2210162da974",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
