import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../commons/constant";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/home">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
