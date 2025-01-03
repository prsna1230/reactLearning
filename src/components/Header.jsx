import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../commons/constant";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex justify-between p-1 bg-slate-300">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-25 rounded-sm " alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li>
            <Link
              to="/"
              className="transition hover:dutation-300 hover:bg-violet-400 p-2 rounded-md  ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="no-underline ms-3  hover:bg-violet-400 p-2 rounded-md"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="no-underline ms-3  hover:bg-violet-400 p-2 rounded-md"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/home"
              className="no-underline ms-3  hover:bg-violet-400 p-2 rounded-md"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="ms-3 me-2  hover:bg-violet-400 p-2 rounded-md"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
