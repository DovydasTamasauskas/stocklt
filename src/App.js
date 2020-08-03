import React from "react";
import "./App.css";
import ChartCandle from "./components/ChartCandle";
import { STOCKS } from "./consts/CONST.js";

const showStock = (key, stock, background) => {
  return (
    <div key={key} style={{ backgroundColor: background(key) }}>
      {stock[1]}
      <ChartCandle symbol={stock[0]} color={background(key)} />
    </div>
  );
};

function App() {
  const background = (key) => (key % 2 === 0 ? "#DCDCDC" : "#A9A9A9");

  return (
    <div className="App">
      {STOCKS.map((stock, key) => showStock(key, stock, background))}
    </div>
  );
}

export default App;
