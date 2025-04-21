import { useEffect } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage/UserPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import logo from "./assets/facegram_logo.png";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <div className="App">
      <div>
        <div className="nav_wrap">
          <img className="header_logo" src={logo} alt="" />
          <div className="icons_wrap">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : "navLink_text"
              }
            >
              <img
                className="users_logo"
                src="https://img.icons8.com/?size=100&id=QRCYXus515lG&format=png&color=000000"
                alt="home"
              />
            </NavLink>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? "active" : "navLink_text"
              }
            >
              <img
                className="users_logo"
                src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
                alt=""
              />
            </NavLink>
            <NavLink to="/chat">
              <img
                className="users_logo"
                src="https://img.icons8.com/?size=100&id=20202&format=png&color=000000"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/users" element={<UserPage />}></Route>
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<Chat/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
