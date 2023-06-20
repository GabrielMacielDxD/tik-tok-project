
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCJcZRnbBmOdLKRMq_r57qkeQq2J5Gur_U",
  authDomain: "tiktok---jornada21.firebaseapp.com",
  projectId: "tiktok---jornada21",
  storageBucket: "tiktok---jornada21.appspot.com",
  messagingSenderId: "34129157803",
  appId: "1:34129157803:web:1f178f6b2a9a808484a1ee"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;