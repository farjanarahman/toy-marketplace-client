// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY2EOCiXu7lUdxchF5kZwRZdZmonRRlGE",
  authDomain: "roboplayground-cbc31.firebaseapp.com",
  projectId: "roboplayground-cbc31",
  storageBucket: "roboplayground-cbc31.appspot.com",
  messagingSenderId: "131927687157",
  appId: "1:131927687157:web:e0f7f5f34576fbdffc6abc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;