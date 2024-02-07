// reducer.js
import { FETCH_CAR_BRANDS } from './actions';

const initialState = {
  carBrands: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAR_BRANDS:
      return {
        ...state,
        carBrands: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
