import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAKLa29cfi-TXxcrWPKjurHE3xf0V7zQgw",
  authDomain: "actividad15-1.firebaseapp.com",
  databaseURL: "https://actividad15-1-default-rtdb.firebaseio.com",
  projectId: "actividad15-1",
  storageBucket: "actividad15-1.appspot.com",
  messagingSenderId: "133077284470",
  appId: "1:133077284470:web:2724f15c7cbd158e3a1157"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export default getDatabase(db);