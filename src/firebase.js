
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "ENTER YOUR API KEY",
  authDomain: "ENTER YOUR AUTHDOMAIN",
  projectId: "ENTER YOUR PROJECTID",
  storageBucket: "ENTER YOUR STORAGEBUCKET",
  messagingSenderId: "ENTER YOUR MESSAGINGSENDERID",
  appId: "ENTER YOUR APPID",
  measurementId: "ENTER YOUR MEASUREMENTID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};

export default app;
