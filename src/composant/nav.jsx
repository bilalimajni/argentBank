import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAuth } from "../redux";
import "./nav.css";

function Nav() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(clearAuth());
    navigate("/");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return isAuthenticated ? (
    <nav className="main-nav">
      <div onClick={handleLogoClick}>
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
      </div>
      <div class="main-nav-item">
        <div className="usericon">
          <i class="fa fa-user-circle"></i>
          <p>tony</p>
        </div>
        <div onClick={handleSignOut}>
          <i class="fa fa-sign-out"> Sign Out </i>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="main-nav">
      <div>
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
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
