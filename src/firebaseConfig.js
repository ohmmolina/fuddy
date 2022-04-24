import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCmQVHdArhab6vQkJdKBKTPlvxmzwGlNPU",
  authDomain: "fuddy-ad407.firebaseapp.com",
  projectId: "fuddy-ad407",
  storageBucket: "fuddy-ad407.appspot.com",
  messagingSenderId: "775044240845",
  appId: "1:775044240845:web:deed654b5e1df4ab6be084"
};


initializeApp(firebaseConfig);
export const auth = getAuth()