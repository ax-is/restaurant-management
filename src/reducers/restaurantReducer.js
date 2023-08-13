import { FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from "../types/types";

const initialState = {
  loading: false,
  restaurants: [],
  error: ''
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
        error: ''
      };
    case FETCH_RESTAURANTS_FAILURE:
      return {
        ...state,
        loading: false,
        restaurants: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default restaurantReducer;
