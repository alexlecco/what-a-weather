import React from "react";

import "./App.scss";
import MainWeatherCard from "./components/MainWeatherCard/MainWeatherCard";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MainWeatherCard />
      </header>
    </div>
  );
};

export default App;
