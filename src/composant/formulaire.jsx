import React, { useState } from "react";
import "./formmulaire.css";
import { useDispatch ,useSelector} from "react-redux";
import { setAuth } from "../redux";
import { setProfile } from "../redux/setprofil";
import { useNavigate } from "react-router-dom";

function StaticForm() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);
 
  

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

    const requestBody = {
      email: formData.email,
      password: formData.password,
    };

    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
       
        
        
        localStorage.setItem("token", data.body.token);
        dispatch(setAuth({ token: data.body.token }));
        
        
        navigate("/user"); 

        fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.body.token}`,
          },
        })
          .then((response) => response.json())
          .then((profileData) => {
            dispatch(setProfile(profileData));
           
          
            
          })
          .catch((error) => {
            console.error("Erreur lors de la récupération du profil :", error);
          });

       
      })
      .catch((error) => {
        console.error("Erreur :", error);
      });
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
