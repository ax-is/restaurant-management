import { API_URL, FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from "../types/types";

export const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_REQUEST
  };
};

export const fetchItemsSuccess = (items) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items
  };
};

export const fetchItemsFailure = (error) => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: error
  };
};

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsRequest());
    try {
      fetch(`${API_URL}/items`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          dispatch(fetchItemsSuccess(data));
        })
        .catch(error => {
          console.error("Error fetching items data: ", error);
          dispatch(fetchItemsFailure(error.message));
        });
    } catch (error) {
      console.error("Error fetching items data: ", error);
      dispatch(fetchItemsFailure(error.message));
    }
  };
};
