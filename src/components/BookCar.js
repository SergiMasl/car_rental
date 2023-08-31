import React, { useState } from "react";
import bookJson from "../fake-back-end/book-selection-options.json";
import "../styles/bookCar.sass";
import Logo from "../styles/img/svg/car-svg--logo.svg";

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
    <div className="container">
      <div className="book--wrapper">
        <h1>Book a car</h1>
        <div>
          <form onSubmit={handleSubmit} className="book--form">
            {Object.keys(bookJson).map((fieldName) => {
              const field = bookJson[fieldName];
              return (
                <div key={fieldName} className="book--form--input">
                  <label htmlFor={fieldName}>
                    <img src={Logo} />
                    {field.name}
                  </label>
                  {field.type === "select" ? (
                    <select
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
