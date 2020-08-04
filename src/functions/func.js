import axios from "axios";

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
  return (
    dateNow.getFullYear() +
    "-" +
    (dateNow.getMonth() > 9
      ? dateNow.getMonth() + 1
      : "0" + (dateNow.getMonth() + 1)) +
    "-" +
    (dateNow.getDate() > 9
      ? dateNow.getDate() + 1
      : "0" + (dateNow.getDate() + 1))
  );
};
