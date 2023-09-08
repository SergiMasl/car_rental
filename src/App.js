import { React, useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/app.sass";
import BookCar from "./components/BookCar";
import MapOfBook from "./components/MapOfBook";
import Cars from "./components/Cars";
import OurTeam from "./components/OurTeam";
import Reviewed from "./components/Reviewed";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
import SingUp from "./components/SingUp";

function App() {
  const [isOpenLogIn, setIsOpenLogIn] = useState(false);
  const [isOpenLogUp, setIsOpenLogUp] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);

  const toggleLogIn = () => {
    setIsOpenLogIn(!isOpenLogIn);
  };
  const toggleLogUp = () => {
    setIsOpenLogUp(!isOpenLogUp);
  };

  return (
    <div className="App">
      {!isOpenLogIn ? null : (
        <LogIn setIsOpenLogIn={setIsOpenLogIn} setIsLogIn={setIsLogIn} />
      )}
      {!isOpenLogUp ? null : <SingUp setIsOpenLogUp={setIsOpenLogUp} />}
      <Header
        isLogIn={isLogIn}
        toggleLogIn={toggleLogIn}
        toggleLogUp={toggleLogUp}
        setIsLogIn={setIsLogIn}
      />
      <Home
        toggleLogIn={toggleLogIn}
        toggleLogUp={toggleLogUp}
        isLogIn={isLogIn}
        setIsLogIn={setIsLogIn}
      />
      <BookCar />
      <MapOfBook />
      <Cars />
      <OurTeam />
      <Reviewed />
      <Footer />
    </div>
  );
}

export default App;
