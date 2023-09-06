import appLogo from "../styles/img/app-footer.png";
import googleLogo from "../styles/img/btm_logos/google.png";
import appleLogo from "../styles/img/btm_logos/apple.png";
import "../styles/_footer.sass";
import phoneSVG from "../styles/img/svg/icons8-phone-50.png";
import emailSVG from "../styles/img/svg/icons8-email-48.png";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="container--footer" id="contact">
      <div className="footer--wrapper">
        <div>
          <div className="footer--info">
            <h2>Download our app to get most out of it</h2>
            <p>
              Thrown shy denote ten ladies throgh ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="footer--btms--conteiner">
              <div className="footer--btm--wrap">
                <img src={googleLogo} />
                <div className="footer--btm--text">
                  <p>GET IT ON</p>
                  <p>Google Play</p>
                </div>
              </div>
              <div className="footer--btm--wrap">
                <img src={appleLogo} />
                <div className="footer--btm--text">
                  <p>Download on the</p>
                  <p>App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer--img">
          <img src={appLogo} />
        </div>
      </div>
      <div className="footer--deatals">
        <div className="footer--deatal--item">
          <h3>
            CAR <span>Rental</span>
          </h3>
          <p>
            we offers a big range of vehiclies for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div className="footer-contact-wrap">
            <img src={phoneSVG} />
            <a href="tel:123-456-7890">123-456-7890</a>
          </div>
          <div className="footer-contact-wrap">
            <img src={emailSVG} />
            <a href="email:car@gmail.com">carrental@gmail.com</a>
          </div>
        </div>
        <div className="footer--deatal--item">
          <h3>Company</h3>
          <a href="#" className="company--link">
            New York
          </a>
          <a href="#" className="company--link">
            Careers
          </a>
          <a href="#" className="company--link">
            Mobile
          </a>
          <a href="#" className="company--link">
            Blog
          </a>
          <a href="#" className="company--link">
            How we work
          </a>
        </div>
        <div className="footer--deatal--item">
          <h3>CWORKING HOURS</h3>
          <p className="work--time">Mon - Fri: 9:00 - 9:00PM</p>
          <p className="work--time">Sat: 9:00AM - 19: 00PM</p>
          <p className="work--time">Sun: Closed</p>
        </div>
        <div className="footer--deatal--item">
          <h3>SUBSCRIPTION</h3>
          <p>Subsribe your Email address for latest news & updates.</p>

          <form onSubmit={handleSubmit} className="sub-by-email">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Email Address"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
