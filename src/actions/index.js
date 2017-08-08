import axios from 'axios';

const API_KEY = '0b66f0f8e1b5e15a5b59581c421348aa';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// Using ES6 template strings, with `` and $

export const FETCH_WEATHER ='FETCH_WEATHER';
// keep the action type consistent between creators and reducers 
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

//Middleware are function that take an action and depending on actions type or payloads, the middleware chooses what action (block, modify) to pass through, and to manipulate the actions, BEFORE they reach the reducer.  They are the gatekeepers.

//Redux-Promise is a middleware package for Redux, it handles Ajax request for this app.

// The action creator returns a 'Type', it is an object with 'type' property
// We also have a "payload", a piece of action that describes

//Axios is used for making Ajax calls

//User clicks Submit, search form, it calls the Action Creator fetchWeather pass in the city.  Make Ajax call with city. Returns a promise, the promise is a data structure doesn't contain data, on the payload key.

//Redux Promise sees the action, sees the payload property, if the payload is a promise, the redux-promise stops action, once requests finishes, it dispatches a new action with the same type, but with a payload of the resolved request to the reducer as the payload.
