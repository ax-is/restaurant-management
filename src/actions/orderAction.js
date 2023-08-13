import { API_URL, FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILURE } from '../types/types';

export const fetchOrdersRequest = () => {
  return {
    type: FETCH_ORDERS_REQUEST
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    payload: orders
  };
};

export const fetchOrdersFailure = (error) => {
  return {
    type: FETCH_ORDERS_FAILURE,
    payload: error
  };
};

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersRequest());
    try {
      fetch(`${API_URL}/orders`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          dispatch(fetchOrdersSuccess(data));
        })
        .catch(error => {
          console.error("Error fetching orders data: ", error);
          dispatch(fetchOrdersFailure(error.message));
        });
    } catch (error) {
      console.error("Error fetching orders data: ", error);
      dispatch(fetchOrdersFailure(error.message));
    }
  };
};

export const fetchOrdersByUserId = (userId) => {
  return (dispatch) => {
    dispatch(fetchOrdersRequest());
    try {
      fetch(`${API_URL}/orders/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          dispatch(fetchOrdersSuccess(data));
        })
        .catch(error => {
          console.error("Error fetching orders data: ", error);
          dispatch(fetchOrdersFailure(error.message));
        });
    } catch (error) {
      console.error("Error fetching orders data: ", error);
      dispatch(fetchOrdersFailure(error.message));
    }
  };
};