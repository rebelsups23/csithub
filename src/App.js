import React from "react";
import Home from "./comps/Home/Home";
import SignIn from "./comps/Signin/SignIn";
import { projectAuth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Navbar from "./comps/Navbar/Navbar";

function App() {
  const [user] = useAuthState(projectAuth);
  return (
    <div className="App">
      <Navbar />
      <section>{user ? <Home /> : <SignIn />}</section>
    </div>
  );
}

export default App;
