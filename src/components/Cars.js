import React, { useState } from "react";
import "../styles/_cars.sass";
import car1 from "../styles/img/cars/audi_A1_S-Line.png";
import carList from "../fake-back-end/car_list.json";

const Cars = () => {
  const [carInFocus, setCarInFocus] = useState("audi_A1_S_Line");

  const handleCarClick = (carId) => {
    setCarInFocus(carId);
  };

  return (
    <div className="container">
      <div className="cars--wrapper">
        <p>Vehicle Models</p>
        <h2>Our Rental Fleet</h2>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          <br></br>
          adventure or business trip
        </p>
        <div className="cars--info--wrap">
          <div>
            {carList.map((item) => (
              <div
                key={item.carId}
                className={`car-btm--choosing ${
                  carInFocus == item.carId ? "selected" : ""
                }`}
                onClick={() => handleCarClick(item.carId)}
              >
                {item.carName}
              </div>
            ))}
          </div>
          <div>
            <img src={car1} alt={carInFocus} />
          </div>
          <div className="car-info-detals--wrap">
            <div>
              <div className="car-price">
                <p className="car-price--info">
                  Price:{" "}
                  {carList.find((item) => item.carId === carInFocus).price}
                </p>
              </div>
              <div className="car-info--detals">
                <p>Model</p>
                <span>|</span>
                <p>
                  ${carList.find((item) => item.carId === carInFocus).Model}
                </p>
              </div>
              <div className="car-info--detals">
                <p>Mark</p>
                <span>|</span>
                <p> {carList.find((item) => item.carId === carInFocus).Mark}</p>
              </div>
              <div className="car-info--detals">
                <p>Yea</p>
                <span>|</span>
                <p>{carList.find((item) => item.carId === carInFocus).Year}</p>
              </div>
              <div className="car-info--detals">
                <p>Doors</p>
                <span>|</span>
                <p>{carList.find((item) => item.carId === carInFocus).Doors}</p>
              </div>
              <div className="car-info--detals">
                <p>A/C</p>
                <span>|</span>
                <p> {carList.find((item) => item.carId === carInFocus).AC}</p>
              </div>
              <div className="car-info--detals">
                <p>Transmission</p>
                <span>|</span>
                <p>
                  {
                    carList.find((item) => item.carId === carInFocus)
                      .Transmission
                  }
                </p>
              </div>
              <div className="car-info--detals">
                <p>Flue</p>
                <span>|</span>
                <p> {carList.find((item) => item.carId === carInFocus).Flue}</p>
              </div>
            </div>
            <button className="car--submit--btm" type="submit">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
