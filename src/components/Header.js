import { LOGO_URL } from "../utils/constants";
import logo from "../assets/Gemini_Generated_Image_ykov79ykov79ykov.png";
import { useState } from "react";

const Header = () => {
  
  // let btnName = "login";
  const [btnNameReact, setBtnNameReact] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        {/* <img
          className="logo"
          src= {logo}
          alt="MealMint Logo"
        /> */}
        {/* {console.log(logo) */}
        <img 
          className="logo"
          src={LOGO_URL}
          alt="MealMint logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About Us</li>
          <button className="login-out" onClick={() => {
            // btnName="logout";
            // console.log(btnName);
            btnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login");
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;