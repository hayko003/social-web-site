import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage/UserPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import logo from "./assets/facegram_logo.png"

function App() {
  return (
    <div className="App">
      <div>
        <img className="header_logo" src={logo} alt="" />
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/users" element={<UserPage/>}></Route>
        <Route path="/profile/:id" element={<ProfilePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
