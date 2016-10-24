import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //don't mutate state, make sure to return new state
      return [ action.payload.data, ...state ];

      //ES6, make new array, put action.payload.data in it.
      // take all the things and add in state.
      // It is the same as return state.concat([ action.payload.data ]);
      // Looks like [city, city, city], not [city], [city, city]
      //We return a new array completely, with old and new data together
      //We DON"T want to MANIPULATE an existing state, we return a new state.
  }
  return state;
}
