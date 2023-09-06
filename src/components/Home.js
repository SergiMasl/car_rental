import "../styles/home.sass";
import { React } from "react";
import Logo from "../styles/img/car-main-logo.png";

const Home = () => {
  return (
    <div className="container container-home" id="home">
      <div className="home--wrapper">
        <div className="home--info">
          <p>Plan your trip now</p>
          <h1>
            Save <span>big</span> with our car rental
          </h1>
          <p>
            Rent the car of your dreams. Unbeatabele price, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="home--btm-wrapper">
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
        </div>
        <div className="home--main--img">
          <img src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
