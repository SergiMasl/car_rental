import React, { useState } from "react";
import "../styles/_cars.sass";
import carList from "../fake-back-end/car_list.json";

const Cars = () => {
  const [carInFocus, setCarInFocus] = useState("audi_A1_S_Line");
  const [currentImageIndex, setCurrentImageIndex] = useState("audi_A1_S_Line");
  console.log(currentImageIndex);

  const handleCarClick = (carId) => {
    setCurrentImageIndex(carId);
    setCarInFocus(carId);
  };

  const list = ["Model", "Mark", "Year", "Doors", "AC", "Transmission", "Flue"];

  return (
    <div className="container container--cars" id="cars">
      <div className="cars--wrapper">
        <p>Vehicle Models</p>
        <h2>Our Rental Fleet</h2>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          <br />
          adventure or business trip
        </p>
        <div className="cars--info--wrap">
          <div>
            {carList.map((item) => (
              <div
                key={item.carId}
                className={`car-btm--choosing ${
                  carInFocus === item.carId ? "selected" : ""
                }`}
                onClick={() => handleCarClick(item.carId)}
              >
                {item.carName}
              </div>
            ))}
          </div>
          <div>
            <img
              src={require(`../styles/img/cars/${currentImageIndex}.png`)}
              alt={carInFocus}
            />
          </div>
          <div className="car-info-detals--wrap">
            <div>
              <div className="car-price class1">
                <p className="car-price--info">
                  Price: $
                  {carList.find((item) => item.carId === carInFocus).price}
                  <br />/ day
                </p>
              </div>
              <div className="car-info-detals--container">
                {list.map((listItem) => (
                  <div className="car-info--detals" key={listItem}>
                    <p>{listItem}</p>
                    <span>|</span>
                    <p>
                      {
                        carList.find((item) => item.carId === carInFocus)[
                          listItem
                        ]
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
