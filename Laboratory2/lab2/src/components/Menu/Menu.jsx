import "./Menu.css";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";

export default function Menu({ isLoggedIn, onLogin, onLogout }){
    return(
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
        </div>
    );
}