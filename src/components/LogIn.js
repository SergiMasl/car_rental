import "../styles/login.sass";
import React, { useState } from "react";
import Person from "../styles/img/svg/person-svgrepo-com.svg";
import Password from "../styles/img/svg/password-lock-svgrepo-com.svg";
import Exit from "../styles/img/svg/exit-to-app-svgrepo-com.svg";
import getLogIn from "./functions/getLogIn";

const LogIn = ({ setIsOpenLogIn, setIsLogIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // getLogIn([username, password]);
    const checkLogIn = getLogIn([username, password]);
    if (checkLogIn) {
      setIsOpenLogIn();
      setIsLogIn(true);
    } else {
      alert("Login or Password is wrong");
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="exit-img-wrap" onClick={() => setIsOpenLogIn()}>
            <img src={Exit} />
          </div>
          <h2>Log In</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div>
              <img src={Person} />
              <input
                type="text"
                id="username"
                placeholder="Type your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div>
              <img src={Password} />
              <input
                type="password"
                id="password"
                placeholder="Type your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
