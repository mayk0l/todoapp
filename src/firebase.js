// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHtq1BhL0sT_kTi2NFRWaMmJqzVn8utG8",
  authDomain: "todo-app-be7b2.firebaseapp.com",
  projectId: "todo-app-be7b2",
  storageBucket: "todo-app-be7b2.appspot.com",
  messagingSenderId: "706995631484",
  appId: "1:706995631484:web:08fed930a5d7650d1fe0f9",
  measurementId: "G-T9Y95TJRX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)