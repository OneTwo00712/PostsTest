// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDuhpsnuENy5mVh3WWG2tLzoC93y3DsfSc",
  authDomain: "vue-blog-system-7abec.firebaseapp.com",
  projectId: "vue-blog-system-7abec",
  storageBucket: "vue-blog-system-7abec.firebasestorage.app",
  messagingSenderId: "446308198862",
  appId: "1:446308198862:web:14debb569053f8d090a39f",
  measurementId: "G-R665HGMHQN",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const timestamp = serverTimestamp;

export { db, timestamp };
