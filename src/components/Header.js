import "../styles/header.sass";
import { react, useState } from "react";
import Logo from "../styles/img/svg/car-svg--logo.svg";
import BurderMenu from "../styles/img/svg/burger-menu-svgrepo-com.svg";
import logOut from "./functions/logOut";

const Header = ({ setIsOpenLogIn, toggleMenu, toggleMenu2, isLogIn }) => {
  const [isActiveBurger, setActiveBurger] = useState(false);
  const setBurgerBtm = () => {
    setActiveBurger(!isActiveBurger);
  };

  const links = (
    <>
      <div className="header--links">
        <a href="#home" className="header--link" onClick={() => setBurgerBtm()}>
          Home
        </a>
        <a
          href="#about"
          className="header--link"
          onClick={() => setBurgerBtm()}
        >
          About
        </a>
        <a href="#book" className="header--link" onClick={() => setBurgerBtm()}>
          Book a Car
        </a>
        <a href="#cars" className="header--link" onClick={() => setBurgerBtm()}>
          Vehical Models
        </a>
        <a href="#team" className="header--link" onClick={() => setBurgerBtm()}>
          Our Team
        </a>
        <a
          href="#contact"
          className="header--link"
          onClick={() => setBurgerBtm()}
        >
          Contact
        </a>
      </div>
      <div className="header--log--wrapper">
        {!isLogIn ? (
          <div className="home--btm-wrapper">
            <button onClick={toggleMenu}> Sign In</button>
            <button onClick={toggleMenu2}>Sign Up</button>
          </div>
        ) : (
          <div className="home--btm-wrapper">
            <button onClick={() => logOut}>Log Out</button>
          </div>
        )}
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
