import { LOGO_URL } from "../utils.js/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About Us</li>
          <li> Contact Us</li>
          <li> Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
