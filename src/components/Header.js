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
        <a
          hrefg="#home"
          className="header--link"
          onClick={() => setBurgerBtm()}
        >
          Home
        </a>
        <a
          hrefg="#about"
          className="header--link"
          onClick={() => setBurgerBtm()}
        >
          About
        </a>
        <a
          hrefg="#book"
          className="header--link"
          onClick={() => setBurgerBtm()}
        >
          Book a Car
        </a>
        <a
          hrefg="#cars"
          className="header--link"
          onClick={() => setBurgerBtm()}
        >
          Vehical Models
        </a>
        <a
          hrefg="#team"
          className="header--link"
          onClick={() => setBurgerBtm()}
        >
          Our Team
        </a>
        <a
          hrefg="#contact"
          className="header--link"
          onClick={() => setBurgerBtm()}
        >
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
    <div className="header-wrapper">
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
    </div>
  );
};

export default Header;
