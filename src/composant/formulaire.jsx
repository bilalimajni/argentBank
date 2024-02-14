import React, { useState } from "react";
import "./formmulaire.css";

function StaticForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false, // Nouvelle entrée pour la case à cocher
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
  };

  return (
    <section className="signInContent">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1 className="titre">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label>Username</label>{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=""
          />
          <br />
        </div>
        <div className="input-wrapper">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=""
          />
        </div>

        <br />
        <div className="input-remember">
          

          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label>Remember me </label>
        </div>

        <br />
        <button className="sign-in-button" type="submit">Sign In</button>
      </form>
    </section>
  );
}

export default StaticForm;
