import React from "react";
import Nav from "../composant/nav";
import Footer from "../composant/footer";
import './singIn.css'
import StaticForm from "../composant/formulaire";

export default function SingIn() {
  return (
    <>
      <Nav />
      
      <main className="main bg-dark">
        <StaticForm />
      </main>

      <Footer />
    </>
  );
}
