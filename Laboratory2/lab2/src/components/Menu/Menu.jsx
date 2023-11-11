import "./Menu.css";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import Debug from "../Debug/Debug";

export default function Menu({ isLoggedIn, onLogin, onLogout }) {
  return (
    <div className="menu">
      <h2>Меню</h2>
      {isLoggedIn ? (
        <div>
          <span className="authText">Ви увійшли в систему!</span>
          <div className="button">
            <LogoutButton onLogout={onLogout} />
          </div>
        </div>
      ) : (
        <div>
          <span className="authText">Будь ласка, увійдіть в систему!</span>
          <div className="button">
            <LoginButton onLogin={onLogin} />
          </div>
        </div>
      )}
      <div className="category-links">
        <Link to="/">
          <button>Main Page</button>
        </Link>
        <Link to="/about">
          <button>About us</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
        <Link to="/debug">
          <button>Debug</button>
        </Link>
      </div>
    </div>
  );
}
