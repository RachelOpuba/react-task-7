import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzKa0WS3IVb3PPy0RZOhpwZzt-Ha2TcLY",
  authDomain: "react-authentication-befe2.firebaseapp.com",
  projectId: "react-authentication-befe2",
  storageBucket: "react-authentication-befe2.appspot.com",
  messagingSenderId: "1027003333458",
  appId: "1:1027003333458:web:652739d768282b8d5d188b",
  measurementId: "G-H1PQJMK3VQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
