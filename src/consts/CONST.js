import { getDateToString } from "../functions/func.js";

// https://nasdaqbaltic.com/statistics/lt/instrument/LT0000102337/trading/chart_price_json?start=2019-07-31&end=2020-07-31&historical=0&_=1596391222511
export const BACKEND_HOST = "https://nasdaqbaltic.com/statistics/lt/instrument";
export const BACKEND_HOST_END =
  "trading/chart_price_json?start=2019-07-31&end=" +
  getDateToString() +
  "&historical=0&_=1596391222511";
export const STOCKS = [
  ["LT0000123911", "Telia Lietuva"],
  ["LT0000102279", "Invalda INVL"],
  ["LT0000102253", "Šiaulių bankas"],
  ["LT0000102030", "Grigeo"],
  ["LT0000131872", "Novaturas"],
  ["LT0000102337", "Apranga"],
  ["LT0000127466", "AUGA group"],
  ["LT0000128092", "Linas Agro Group"],
  ["LT0000101446", "Panevėžio statybos trestas"],
  ["LT0000111676", "Pieno žvaigždės"],
  ["LT0000100372", "Rokiškio sūris"],
  ["LT0000111650", "Klaipėdos nafta"],
  ["LT0000127508", "Vilkyškių pieninė"],
  ["EE3100034653", "Arco Vara"],
  ["EE3100145616", "Baltika"],
  ["EE3100007857", "Coop Pank"],
  ["EE3100016965", "Ekspress Grupp"],
  ["EE3100127242", "EfTEN Real Estate Fund III"],
  ["LV0000100659", "Grindeks"],
  ["EE3100004250", "Harju Elekter"],
  ["LV0000101590", "HansaMatrix"],
  ["EE3100073644", "LHV Group"],
  ["EE3100098328", "Merko Ehitus"],
  ["EE3100039496", "Nordecon"],
  ["LV0000100501", "Olainfarm"],
  ["EE3100006040", "Pro Kapital Grupp"],
  ["EE3100101031", "PRFoods"],
  ["LV0000101129", "SAF Tehnika"],
  ["EE3100001751", "Silvano Fashion Group"],
  ["EE3100004466", "Tallink Grupp"],
  ["EE0000001105", "Tallinna Kaubamaja Grupp"],
  ["EE3100021635", "Tallinna Sadam"],
  ["EE3100026436", "Tallinna Vesi"],
];
