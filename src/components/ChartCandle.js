import React, { useState } from "react";
import Plot from "react-plotly.js";
import { BACKEND_HOST, BACKEND_HOST_END, STOCKS } from "../consts/CONST.js";
import { getTimeSeriesCandle } from "../functions/func.js";
import useEffectAsync from "../helpers/useEffectAsync.js";

function Stock({ symbol, color }) {
  const [Date, setDate] = useState([]);
  const [Price, setPrice] = useState([]);
  const [Volume, setVolume] = useState([]);
  const [DataOld, setDataOld] = useState([]);

  useEffectAsync(async () => {
    const { date, price, volume, dataOld } = await getData(symbol);
    setDate(date);
    setPrice(price);
    setVolume(volume);
    setDataOld(dataOld);
  }, symbol);

  return (
    <div>
      <div>{DataOld}</div>
      <div>{Price[Price.length - 1]}</div>
      <Plot
        data={[
          {
            x: Date,
            y: Price,
            type: "scatter",
            marker: { color: "green" },
            name: "MacdHist",
            showlegend: false,
          },
        ]}
        layout={{
          margin: {
            r: 50,
            t: 15,
            b: 10,
            l: 50,
          },
          width: window.innerWidth,
          height: 240,
          plot_bgcolor: color,
          paper_bgcolor: color,
          xaxis: {
            showgrid: false,
          },
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}

const getData = async (symbol) => {
  const { date, price, volume, dataOld } = await getTimeSeriesCandle(
    `${BACKEND_HOST}/${symbol}/${BACKEND_HOST_END}`
  );
  return { date, price, volume, dataOld };
};

export default Stock;
