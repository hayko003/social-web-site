import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import { Navigate } from "react-router-dom";

function HomePage() {
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", userId);
    }
  }, [userId]);

  if (userId) {
    return <Navigate to={`/profile/${userId}`} />;
  }

  if (localStorage.getItem("userId")) {
    return (
      <Navigate to={`/profile/${localStorage.setItem("userId", userId)}`} />
    );
  }

  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default HomePage;
