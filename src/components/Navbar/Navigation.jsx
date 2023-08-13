import './navigation.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import brandlogo from "../../media/brand-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUserLarge, faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartLength = cartItems ? cartItems.length : 0;
    const userType = useSelector(state => state.auth);
    const isStaff = isLoggedIn ? userType.user.userType === 'staff' : '';
    function print(){
        console.log('clicked');
    }
    return (
        <nav className='nav-bar'>
            <div className="logo">
                <img src={brandlogo} alt="some" />
            </div>
            {
                isLoggedIn ?
                    <ul className="menuItems">
                        <div className='text-nav'>
                            <NavLink to="/" activeclassname="active-link" className="text-link">
                                Home
                            </NavLink>
                            <NavLink
                                to="/orders"
                                activeclassname="active-link"
                                className="text-link"
                            >
                                Orders
                            </NavLink>
                            <NavLink
                                to="/recipe"
                                activeclassname="active-link"
                                className="text-link"
                            >
                                Recipe
                            </NavLink>
                        </div>
                        <div className='icon-nav'>
                            {
                                !isStaff ?
                                    <NavLink to='/cart' activeclassname='active-link' data-item='Cart' className='cart-link'>
                                        <span className='cart-length'>
                                            {cartLength}
                                        </span>
                                        <FontAwesomeIcon icon={faCartShopping} style={{ mixBlendMode: 'multiply', fontSize: '20px' }} />
                                    </NavLink>
                                    :
                                    <></>
                            }
                            <NavLink to='/account' activeclassname='active-link' data-item='Profile'>
                                <FontAwesomeIcon icon={faUserLarge} style={{ mixBlendMode: 'multiply', fontSize: '20px' }} />
                            </NavLink>
                            <button className="sidebar-button" onClick={print}> 
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>
                    </ul>
                    :
                    <ul className="menuItems">
                        <NavLink to='/login' activeclassname='active-link' data-item=''>
                            Login
                        </NavLink>
                        <NavLink to='/signup' activeclassname='active-link' data-item=''>
                            Signup
                        </NavLink>
                    </ul>
            }

        </nav>
    );
}

export default Navigation;