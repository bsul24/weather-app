"use strict";

const API_KEY = "d2c37edd354ef02ad2ead008837f49a9";
const url = "fsdaf";
const options = {
  enableHighAccuracy: true,
  timeout: 10000,
};
navigator.geolocation.getCurrentPosition(
  successCallBack,
  errorCallBack,
  options
);

fetch()
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
    conversionOutput.textContent = `${amount} ${from} is equal to ${data.result} ${to}`;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

function errorCallBack(error) {
  alert(error);
}

function successCallBack(position) {
  console.log(position);
}
