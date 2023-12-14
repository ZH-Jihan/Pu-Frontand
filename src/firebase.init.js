// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB3h4BL_yRWe_RBjNtPOGd4vq2FjoxS8Y",
  authDomain: "presidency-university-ap-d9daa.firebaseapp.com",
  projectId: "presidency-university-ap-d9daa",
  storageBucket: "presidency-university-ap-d9daa.appspot.com",
  messagingSenderId: "589839273785",
  appId: "1:589839273785:web:468d92cca22a50856222e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;