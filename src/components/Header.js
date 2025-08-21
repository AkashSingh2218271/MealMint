import { LOGO_URL } from "../utils/constants";
import logo from "../assets/Gemini_Generated_Image_ykov79ykov79ykov.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
          alt="MealMint Logo"
        />
        {/* {console.log(logo)}
        <img 
          className="logo"
          src={logo}
          alt="MealMint logo"
        /> */}
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;