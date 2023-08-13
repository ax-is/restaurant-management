import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_USER, UPDATE_USER, API_URL } from '../types/types';

export const loginSuccess = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    });
  };
};
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
};
export const loginUser = (email, password) => {
  return (dispatch) => {
    fetch(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(userData => {
        const user = userData.find(user => user.email === email && user.password === password);
        if (user && user.userType === 'staff') {
          fetch(`${API_URL}/restaurants`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then(restaurantData => {
              const restaurant = restaurantData.filter(item => item.staff.includes(user._id))[0];
              const restaurantName = restaurant ? restaurant.restaurantName : null;
              const loggedInUser = { ...user, isLoggedIn: true, restaurantName: restaurantName };
              dispatch(loginSuccess(loggedInUser));
            })
            .catch(error => {
              console.error('Error fetching restaurant data:', error);
              dispatch(loginFailure('Error fetching restaurant data'));
            });
        } else if (user) {
          const loggedInUser = { ...user, isLoggedIn: true };
          dispatch(loginSuccess(loggedInUser));
        } else {
          dispatch(loginFailure('User not found'));
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
        dispatch(loginFailure('Error logging in'));
      });
  };
};
export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER
    });
  };
};
export const updateUser = (id, updatedUser) => {
  return (dispatch) => {
    fetch(`${API_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('User updated successfully:', data);
        dispatch({
          type: UPDATE_USER,
          payload: data
        });
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };
};
