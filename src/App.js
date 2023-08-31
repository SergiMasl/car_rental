import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/app.sass";
import BookCar from "./components/BookCar";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <BookCar />
    </div>
  );
}

export default App;
