import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/app.sass";
import BookCar from "./components/BookCar";
import MapOfBook from "./components/MapOfBook";
import Cars from "./components/Cars";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <BookCar />
      <MapOfBook />
      <Cars />
    </div>
  );
}

export default App;
