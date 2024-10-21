import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";  

const firebaseConfig = {
  apiKey: "AIzaSyA6fFsnG9ZJtpd5dIQIyGY2I0BeYrrkvB4",
  authDomain: "reinforcement-project-25bed.firebaseapp.com",
  projectId: "reinforcement-project-25bed",
  storageBucket: "reinforcement-project-25bed.appspot.com",
  messagingSenderId: "14987735673",
  appId: "1:14987735673:web:0b235869fa6b5a9bb11aa8",
  measurementId: "G-0LPTX8JZ3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export const logout = () => {
  return signOut(auth);
};

export default auth;
