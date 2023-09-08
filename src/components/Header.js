import "../styles/header.sass";
import { react, useState } from "react";
import Logo from "../styles/img/svg/car-svg--logo.svg";
import BurderMenu from "../styles/img/svg/burger-menu-svgrepo-com.svg";
import logOut from "./functions/logOut";
import headerLinksArr from "../fake-back-end/headerLinksArr.json";

const Header = ({ setIsLogIn, toggleLogIn, toggleLogUp, isLogIn }) => {
  const [isActiveBurger, setActiveBurger] = useState(false);
  const setBurgerBtm = () => {
    setActiveBurger(!isActiveBurger);
  };
  const toggleLogOut = () => {
    logOut();
    setIsLogIn();
  };

  const links = (
    <>
      <div className="header--links">
        {headerLinksArr.map((item) => (
          <a
            href={item.href}
            key={item.href}
            className="header--link"
            onClick={() => setBurgerBtm()}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="header--log--wrapper">
        {!isLogIn ? (
          <div className="home--btm-wrapper">
            <button onClick={toggleLogIn}> Sign In</button>
            <button onClick={toggleLogUp}>Sign Up</button>
          </div>
        ) : (
          <div className="home--btm-wrapper">
            <button onClick={() => toggleLogOut()}>Log Out</button>
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
