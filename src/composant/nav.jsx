import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAuth } from "../redux";
import { clearProfile } from "../redux/setprofil";
import "./nav.css";

function Nav() {
  const profileState = useSelector((state) => state.profile);
  const userName = profileState.profile?.body?.userName || "";
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(clearAuth());
    dispatch(clearProfile());
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
          src="./img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
      </div>
      <div class="main-nav-item">
        <div className="usericon">
          <i class="fa fa-user-circle"></i>
          <p>{userName}</p>
        </div>
        <div onClick={handleSignOut}>
          
          <i class="fa fa-sign-out"> Sign Out </i>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="main-nav">
      <div onClick={handleLogoClick}>
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
      </div>
      <div class="main-nav-item">
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          <h1 className="seConnecter">Sign In</h1>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
