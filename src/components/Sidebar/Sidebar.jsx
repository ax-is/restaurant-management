import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Sidebar.css';

function Sidebar() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <button className="sidebar-button" onClick={toggleSidebar}>
                X
            </button>
            <ul className="sidebar-links">
                <li>
                    <NavLink to="/" onClick={toggleSidebar}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/orders" onClick={toggleSidebar}>
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/recipe" onClick={toggleSidebar}>
                        Recipe
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;