import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux";
import { setProfile } from "../redux/setprofil";
import { useNavigate } from "react-router-dom";



export default function post() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const requestBody = {
    email: formData.email,
    password: formData.password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setAuth(data.body.token));
        console.log(localStorage);
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
            console.log("Profile Data:", profileData);
            
          })
          .catch((error) => {
            console.error("Erreur lors de la récupération du profil :", error);
          });

       
      })
      .catch((error) => {
        console.error("Erreur :", error);
      });
  };

}
