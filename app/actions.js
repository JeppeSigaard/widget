import { BASEURL, APPID } from "../config";
import axios from "axios";
import { stringify } from "query-string";

// Action constant
export const SET_WEATHER = "SET_WEATHER";

// Set weather
export const setWeather = function(status, data) {
  return { type: SET_WEATHER, status, data };
};

// Get weather
export const getWeather = function(city) {
  return (dispatch, getState) => {
    const query = stringify({ q: `${city},dk`, appid: APPID, units: "metric" });
    dispatch(setWeather("loading"));

    axios
      .get(`${BASEURL}?${query}`)
      .then(response => {
        dispatch(setWeather("success", response.data));
      })
      .catch(e => {
        dispatch(setWeather("failed", e));
      });
  };
};
