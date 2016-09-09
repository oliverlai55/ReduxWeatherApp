import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //don't mutate state, make sure to return new state
      return [ action.payload.data, ...state ];
      //ES6, make new array, put action.payload.data in it.
      // take all the things and add in state.
      //return state.concat([ action.payload.data ]);
  }
  return state;
}
