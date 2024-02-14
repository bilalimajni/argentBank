// Header.jsx

import React from "react";
import "./nav.css"; // Utilisez un chemin relatif
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="main-nav">
      <div>
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="j"
        />
      </div>
      <div class="main-nav-item">
        <Link to="/SingIn" className="main-nav-item">
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          <h1 className="seConnecter">Sign In</h1>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
