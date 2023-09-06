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

  return (
    <div className="container container--cars" id="cars">
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
                  {carList.find((item) => item.carId === carInFocus).price}{" "}
                  <br />/ day
                </p>
              </div>
              <div className="car-info-detals--container">
                <div className="car-info--detals class2">
                  <p>Model</p>
                  <span>|</span>
                  <p>
                    {carList.find((item) => item.carId === carInFocus).Model}
                  </p>
                </div>
                <div className="car-info--detals class3">
                  <p>Mark</p>
                  <span>|</span>
                  <p>
                    {carList.find((item) => item.carId === carInFocus).Mark}
                  </p>
                </div>
                <div className="car-info--detals class4">
                  <p>Yea</p>
                  <span>|</span>
                  <p>
                    {carList.find((item) => item.carId === carInFocus).Year}
                  </p>
                </div>
                <div className="car-info--detals class5">
                  <p>Doors</p>
                  <span>|</span>
                  <p>
                    {carList.find((item) => item.carId === carInFocus).Doors}
                  </p>
                </div>
                <div className="car-info--detals class6">
                  <p>A/C</p>
                  <span>|</span>
                  <p> {carList.find((item) => item.carId === carInFocus).AC}</p>
                </div>
                <div className="car-info--detals class7">
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
                  <p>
                    {carList.find((item) => item.carId === carInFocus).Flue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
