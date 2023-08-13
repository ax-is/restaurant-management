import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CustomerHomePage from '../Home/CustomerHomePage.jsx';
import Pagenotfound from '../Pageoutfound/Pagenotfound';
import SignupForm from '../SignUp/Signup';
import LoginForm from '../Login/Login.jsx';
import Account from '../Account/Account.jsx';
import StaffHomePage from '../Home/StaffHomePage.jsx';
import RestaurantOrders from '../Orders/RestaurantOrders.jsx';
import CustomerOrders from '../Orders/CustomerOrders.jsx'
import RestaurantPage from '../RestaurantPage/RestaurantPage.jsx';
import CartPage from '../CartPage/CartPage.jsx';

function AllRoutes() {
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
  const userRole = useSelector(state => state.auth.user?.userType || null);
  const isStaff = isAuthenticated && userRole === 'staff';
  const isCustomer = isAuthenticated && userRole === 'customer';

  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      {!isAuthenticated && (
        <>
          <Route path="/" element={<LoginForm />} />
          <Route path="/*" element={<LoginForm />} />
        </>
      )}

      {isAuthenticated && <Route path="/account" element={<Account />} />}

      {isStaff && (
        <>
          <Route path="/" element={<StaffHomePage />} />
          <Route path="/orders" element={<RestaurantOrders />} />
        </>
      )}
      {isCustomer && (
        <>
          <Route path="/" element={<CustomerHomePage />} />
          <Route path="/orders" element={<CustomerOrders />} />
          <Route path="/restaurants/:restaurantName" element={<RestaurantPage />} />
          <Route path="/cart" element={<CartPage />} />
        </>
      )}
      <Route path="/*" element={<Pagenotfound />} />
    </Routes>
  );
}


export default AllRoutes;
