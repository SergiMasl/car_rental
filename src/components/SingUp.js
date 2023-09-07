import "../styles/login.sass";
import React, { useState } from "react";
import Person from "../styles/img/svg/person-svgrepo-com.svg";
import Password from "../styles/img/svg/password-lock-svgrepo-com.svg";
import Exit from "../styles/img/svg/exit-to-app-svgrepo-com.svg";
import Email from "../styles/img/svg/email-open-svgrepo-com.svg";
import setSing from "../components/functions/setSing";

const SingUp = ({ setIsOpenLogUp }) => {
  const submitSingUp = (e) => {
    e.preventDefault();
    if (password != password2) {
      alert("Passwort is not same");
    } else {
      const isApprove = setSing([username, password, email]);
      if (isApprove) {
        setIsOpenLogUp();
      } else {
        alert("Something wrong");
      }
    }
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form" onSubmit={submitSingUp}>
          <div className="exit-img-wrap" onClick={() => setIsOpenLogUp()}>
            <img src={Exit} />
          </div>
          <h2>Log In</h2>
          <div className="form-group">
            <div>
              <img src={Person} />
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <img src={Email} />
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <img src={Password} />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <img src={Password} />
              <input
                type="password"
                id="password2"
                placeholder="Repeat Password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
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

export default SingUp;
