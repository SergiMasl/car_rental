import "../styles/header.sass";
import { react, useState } from "react";
import Logo from "../styles/img/svg/car-svg--logo.svg";

const Header = () => {
  return (
    <div className="header--container">
      <img src={Logo} />
      <div className="header--links">
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
      <div className="header--log--wrapoer">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
