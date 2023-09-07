import "../styles/home.sass";
import { React } from "react";
import Logo from "../styles/img/car-main-logo.png";
import logOut from "./functions/logOut";

const Home = ({ toggleMenu, toggleMenu2, isLogIn, setIsLogIn }) => {
  const logOutBtm = () => {
    logOut();
    setIsLogIn();
  };

  return (
    <div className="container container-home" id="home">
      <div className="home--wrapper">
        <div className="home--info">
          {!isLogIn ? (
            <p>Plan your trip now</p>
          ) : (
            <div className="home--btm-wrapper">
              <p>
                Hello: {localStorage.getItem("username")}! Plan your trip now
              </p>
            </div>
          )}

          <h1>
            Save <span>big</span> with our car rental
          </h1>
          <p>
            Rent the car of your dreams. Unbeatabele price, unlimited miles,
            flexible pick-up options and much more.
          </p>
          {!isLogIn ? (
            <div className="home--btm-wrapper">
              <button onClick={toggleMenu}> Sign In</button>
              <button onClick={toggleMenu2}>Sign Up</button>
            </div>
          ) : (
            <div className="home--btm-wrapper">
              <button onClick={() => logOutBtm()}>Log Out</button>
            </div>
          )}
        </div>
        <div className="home--main--img">
          <img src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
