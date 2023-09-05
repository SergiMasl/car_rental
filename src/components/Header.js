import "../styles/header.sass";
import { react, useState } from "react";
import Logo from "../styles/img/svg/car-svg--logo.svg";
import BurderMenu from "../styles/img/svg/burger-menu-svgrepo-com.svg";

const Header = () => {
  const [isActiveBurger, setActiveBurger] = useState(false);
  const setBurgerBtm = () => {
    // !isActiveBurger ? setActiveBurger(true) : setActiveBurger(false);
    setActiveBurger(!isActiveBurger);
  };

  const links = (
    <>
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
      <div className="header--log--wrapper">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </>
  );

  const mobileSideBarClass = ` ${
    isActiveBurger == false ? "hidden" : "active"
  } mobileTransition`;

  return (
    <div className="header--container ">
      <img src={Logo} />

      <div className="destop">{links}</div>
      <div className="mobile">
        <div className={mobileSideBarClass}>{links}</div>
      </div>

      <div className="header--burger-log" onClick={() => setBurgerBtm()}>
        <img src={BurderMenu} />
      </div>
    </div>
  );
};

export default Header;
