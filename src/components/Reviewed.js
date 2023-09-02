import { useState, useEffect } from "react";
import "../styles/_Reviewed.sass";
import getClientReviews from "./functions/getClientReviews";

const Reviewed = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const clientReviews = await getClientReviews();
      setReviews(clientReviews);
      console.log(clientReviews);
    };

    // Fetch client reviews initially
    fetchData();

    // Fetch client reviews every 3 seconds
    const interval = setInterval(fetchData, 3000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="review-wrap">
        <div className="review-description-section">
          <h3>Reviewed by Poeple</h3>
          <h2>Client's Tecstimonoals</h2>
          <p>
            Discover the positive impact we've made on the our clients by
            reading through their <br /> testimonials. Our clients have
            experienced our service and results, and they're eager to <br />
            share their positive experiences with you.
          </p>
        </div>

        <div className="review-section">
          {reviews.map((i) => (
            <div key={i.id}>
              <div className="review-item-text">
                <h5>{i.title}</h5>
                <p>{i.text}</p>
              </div>
              <div className="review-item-client--info">
                <div>
                  <img src={require(`../styles/img/clients/${i.img}.jpg`)} />
                  <div className="client-name">
                    <p>{i.client_name}</p>
                    <p>{i.city}</p>
                  </div>
                </div>
                <div className="rate">
                  <p>
                    {i.rate} <span> / 5</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviewed;
