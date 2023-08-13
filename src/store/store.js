import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; 
import authReducer from '../reducers/authReducer';
import cartReducer from '../reducers/cartReducer';
import itemReducer from '../reducers/itemReducer';
import restaurantReducer from '../reducers/restaurantReducer';
import ordersReducer from '../reducers/orderReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  item: itemReducer,
  restaurant: restaurantReducer,
  order: ordersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk)); 

export default store;
