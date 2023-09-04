import "../styles/_ourTeam.sass";
import Logo from "../styles/img/banner-cars.png";

import dealInfo from "../fake-back-end/dealInfo.json";

const OurTeam = () => {
  return (
    <div className="container-our-team">
      <div className="our-team--banner">
        <h2>Save big with our cheap car rental!</h2>
        <p>
          Top Airports. Local Supplies. <span>24/7</span> Support.
        </p>
      </div>
      <div className="our-team--wrapper">
        <img src={Logo} />
      </div>
      <div className="deal-info-section">
        <div>
          <h4>Why Choose Us</h4>
          <h3>Best valued deals you will ever find</h3>
          <p>
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate rentimg
            experience, so dont miss out on your chance to save big.
          </p>
          <button>Find Deals</button>
        </div>
        <div>
          {dealInfo.map((i) => (
            <div className="deal-info-wrap" key={i.id}>
              <img src={require(`../styles/img/svg/${i.img}.svg`)} />
              <div>
                <h4>{i.title}</h4>
                <p>{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
