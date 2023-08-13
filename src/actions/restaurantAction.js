import { API_URL, FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from "../types/types";

export const fetchRestaurantsRequest = () => {
  return {
    type: FETCH_RESTAURANTS_REQUEST
  };
};

export const fetchRestaurantsSuccess = (restaurants) => {
  return {
    type: FETCH_RESTAURANTS_SUCCESS,
    payload: restaurants
  };
};

export const fetchRestaurantsFailure = (error) => {
  return {
    type: FETCH_RESTAURANTS_FAILURE,
    payload: error
  };
};

export const fetchRestaurants = () => {
  return (dispatch) => {
    dispatch(fetchRestaurantsRequest());
    try {
      fetch(`${API_URL}/restaurants`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          dispatch(fetchRestaurantsSuccess(data));
        })
        .catch(error => {
          console.error("Error fetching restaurants data: ", error);
          dispatch(fetchRestaurantsFailure(error.message));
        });
    } catch (error) {
      console.error("Error fetching restaurants data: ", error);
      dispatch(fetchRestaurantsFailure(error.message));
    }
  };
};