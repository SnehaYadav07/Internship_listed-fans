import "./app.css";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import app from "./firebase";
import { useEffect, useState } from "react";
import Signin from "./components/Signin/Signin";
import Graph from "./components/graph/Graph"
import Sidebar from "./components/slidebar/Slidebar";
import Stat from "./components/stats/Stat";
import Products from "./components/product/Products";
import Schedule from "./components/schedule/Schedule";
import Top from "./components/top/Top"

const auth = getAuth(app);
const logOut = () => signOut(auth);

const loginGoogle = () => {
  const providerGoogle = new GoogleAuthProvider();
  signInWithPopup(auth, providerGoogle);
};

function App() {
  const [user, setUser] = useState(false);

  const photoURL = (user)?user.photoURL:"";
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      setUser(data);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {!user ? (
        <div className="box">
          <div className="left-side">
            <div className="board">
              <p>Board.</p>
            </div>
          </div>
          <div className="right-side">
            <Signin  loginGoogle={loginGoogle} />
           
          </div>
        </div>
      ) : ( 
        <div className="dashboard">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main">
            <div className="first">
              <Top photo={photoURL} logOut={logOut} />
              
            </div>
            <div className="second">
              <Stat />
            </div>
            <div className="third">
              <Graph />
            </div>
            <div className="fourth">
              <Products />
              <Schedule />
            </div>
          </div>
        </div>
      )} 
    </>
  );
}

export default App;

