import React from "react";
import { projectAuth } from "../../firebase/config";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <header className="navbar">
        <h3 className="logo">
          csit<em>hub</em>
        </h3>
        <nav>
          <ul>
            <li className="nav-link">
              <a href="#about">About</a>
            </li>
            <li className="nav-link">
              <a href="#contact">Contact</a>
            </li>
            {projectAuth.currentUser ? (
              <li className="nav-link">
                <button
                  className="btn btn-primary btn-signout"
                  onClick={() => {
                    projectAuth.signOut().then(() => {
                      console.log("Signed out");
                    });
                  }}
                >
                  Sign out
                </button>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
