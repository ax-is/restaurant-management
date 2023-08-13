import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faRoadCircleExclamation, faBackward } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <nav className="nav">
            <NavLink to="/"><span className='nav-logo'>Restaurant Management App </span></NavLink>
            <div className="nav-links">
                {isLoggedIn ? <>
                    <NavLink to="/">
                        Home
                        <FontAwesomeIcon icon={faBackward} style={{ mixBlendMode: 'multiply', fontSize: '20px' }} />
                    </NavLink>
                    <NavLink to="/orders">Order History</NavLink>
                    <NavLink to="/account">Account</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                </> : <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </>}
            </div>
        </nav>
    );
}

export default React.memo(Navbar);
