import React from "react";
import "./LoginButton.css";

export default function LoginButton({onLogin}){
    return(
        <button onClick={onLogin} className="loginButton">
            Увійти
        </button>
    );
}