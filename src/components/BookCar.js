import React, { useState } from "react";
import bookJson from "../fake-back-end/book-selection-options.json";
import "../styles/bookCar.sass";
import LogoCar from "../styles/img/svg/car-svgrepo-com.svg";
import LogoCalendar from "../styles/img/svg/car--savg--calendar.svg";
import LogoPin from "../styles/img/svg/map-pin-svg.svg";

const BookCar = () => {
  const [formData, setFormData] = useState({});

  const handleFieldChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can use the formData for further processing, e.g., sending to a server.
    console.log(formData);
  };

  return (
    <div className="container" id="book_a_car">
      <div className="book--wrapper">
        <h1>Book a car</h1>
        <div>
          <form onSubmit={handleSubmit} className="book--form">
            {Object.keys(bookJson).map((fieldName) => {
              const field = bookJson[fieldName];
              return (
                <div key={fieldName} className="book--form--input">
                  <label htmlFor={fieldName}>
                    {fieldName === "carType" ? <img src={LogoCar} /> : null}
                    {fieldName === "pickUpTime" ? (
                      <img src={LogoCalendar} />
                    ) : null}
                    {fieldName === "dropOffTime" ? (
                      <img src={LogoCalendar} />
                    ) : null}
                    {fieldName === "pickUpPlace" ? <img src={LogoPin} /> : null}
                    {fieldName === "dropOffPlace" ? (
                      <img src={LogoPin} />
                    ) : null}
                    <span className="title-car"> {field.name}</span>
                  </label>
                  {field.type === "select" ? (
                    <select
                      required
                      id={fieldName}
                      value={formData[fieldName] || ""}
                      onChange={(e) =>
                        handleFieldChange(fieldName, e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Please choose...
                      </option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "time" ? (
                    <input
                      required
                      type="time"
                      id={fieldName}
                      value={formData[fieldName] || ""}
                      onChange={(e) =>
                        handleFieldChange(fieldName, e.target.value)
                      }
                    />
                  ) : null}
                </div>
              );
            })}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookCar;
