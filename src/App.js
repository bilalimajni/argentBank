import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SingIn from "./page/singIn";
import Index from "./page/index";
import User from "./page/user";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/SingIn" element={<SingIn />} />
        
        {isAuthenticated ? (
          <Route path="/User" element={<User />} />
        ) : (
          <Route
            path="/User"
            element={<Navigate to="/SingIn" replace />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
