// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVSC-p6w4Pl3IqB10qJwNBmX-_7R-gCgA",
  authDomain: "car-garage-cfd09.firebaseapp.com",
  projectId: "car-garage-cfd09",
  storageBucket: "car-garage-cfd09.appspot.com",
  messagingSenderId: "1047168235513",
  appId: "1:1047168235513:web:fa0c4ea79f7502ae15af28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;