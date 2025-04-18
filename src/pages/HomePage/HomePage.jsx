import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import { Navigate } from "react-router-dom";

function HomePage() {
  const { userId } = useSelector((state) => state.auth);
  if (userId) {
    localStorage.setItem("userId", userId);
    return <Navigate to={`/profile/${userId}`} />;
  }
  

  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default HomePage;
