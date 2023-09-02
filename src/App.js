import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/app.sass";
import BookCar from "./components/BookCar";
import MapOfBook from "./components/MapOfBook";
import Cars from "./components/Cars";
import OurTeam from "./components/OurTeam";
import Reviewed from "./components/Reviewed";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <BookCar />
      <MapOfBook />
      <Cars />
      <OurTeam />
      <Reviewed />
    </div>
  );
}

export default App;
