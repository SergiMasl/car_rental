import "../styles/header.sass";
import { react, useState } from "react";
import Logo from "../styles/img/svg/car-svg--logo.svg";
import BurderMenu from "../styles/img/svg/burger-menu-svgrepo-com.svg";

const Header = () => {
  return (
    <div className="header--container ">
      <img src={Logo} />

      <div className="header--links hidden">
        <a hrefg="#" className="header--link">
          Home
        </a>
        <a hrefg="#" className="header--link">
          About
        </a>
        <a hrefg="#" className="header--link">
          Book a Car
        </a>
        <a hrefg="#" className="header--link">
          Vehical Models
        </a>
        <a hrefg="#" className="header--link">
          Our Team
        </a>
        <a hrefg="#" className="header--link">
          Contact
        </a>
      </div>
      <div className="header--log--wrapoer hidden">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
      <div className="header--log--wrapoer">
        <img src={BurderMenu} />
      </div>
    </div>
  );
};

export default Header;
