// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDARar_rKb5DKIWE4IQwtwo5sQfqo8OGjo",
  authDomain: "webshop-44d35.firebaseapp.com",
  projectId: "webshop-44d35",
  storageBucket: "webshop-44d35.appspot.com",
  messagingSenderId: "302042779007",
  appId: "1:302042779007:web:837df67d6a81f56e339e4a",
  measurementId: "G-0DSWX59GR0",
  databaseURL: 'gs://webshop-44d35.appspot.com',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


