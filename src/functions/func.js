import axios from "axios";
import moment from "moment";

const getDataOld = (date) =>
  Math.floor((new Date().getTime() - date) / (24 * 60 * 60 * 1000));

export const getTimeSeriesCandle = async (endpoint) => {
  const endpointData = await axios(endpoint);
  const date = endpointData.data.data.data.map((x) => x[0]);
  const price = endpointData.data.data.data.map((x) => x[1]);
  const volume = endpointData.data.data.data.map((x) => x[2]);

  return {
    date: date,
    price: price,
    volume: volume,
    dataOld: getDataOld(date[date.length - 1]),
  };
};

export const getDateToString = () => {
  var dateNow = new Date();
  dateNow.setDate(dateNow.getDate() - 1);
  return moment(dateNow).format('YYYY-MM-DD')
};
