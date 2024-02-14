import React from "react";
import Nav from "../composant/nav";
import Footer from "../composant/footer";
import AcountWapper from "../composant/acountList";
import "./user.css";

function User() {
  return (
    <>
      <header></header>
      <Nav />
      <main className="dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button"> Edit Name</button>
        </div>

        <AcountWapper />
      </main>
      <Footer />
    </>
  );
}
export default User;
