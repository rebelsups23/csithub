import React from "react";
import { projectAuth, provider } from "../../firebase/config";
import "./Signin.css";

const SignIn = ({ setUser }) => {
  const signInWithGoogle = (e) => {
    projectAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("Signed in");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="signin">
      <h3>Sign in to explore our website</h3>
      <button className="btn btn-primary signin-btn" onClick={signInWithGoogle}>
        Continue with google
      </button>
    </div>
  );
};

export default SignIn;
