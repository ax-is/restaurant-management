import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, updateUser } from '../../actions/authActions';
import './Account.css';
import { FaPencilAlt } from 'react-icons/fa';

function Account() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const [updatedUser, setUpdatedUser] = useState({ fullName: '', email: '', password: '' });
    const [isEditing, setIsEditing] = useState(false);
    const handleLogout = () => {
        dispatch(logoutUser());
    };

    const handleInputChange = (e) => {
        setUpdatedUser({
            ...updatedUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(user._id, updatedUser));
        setIsEditing(false);
    };

    return (
        <section className="about-dev">
            {isEditing ? (
                <form onSubmit={handleEditSubmit} className="edit-form">
                    <h2>Update Info</h2>
                    <label>
                        Name:
                        <input type="text" name="fullName" value={updatedUser.fullName} onChange={handleInputChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={updatedUser.email} onChange={handleInputChange} />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={updatedUser.password}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setIsEditing(false)}>
                        Cancel
                    </button>
                </form>
            ) : <div><header className="profile-card_header">
                <div className="profile-card_header-container">
                    <div className="profile-card_header-imgbox">
                        <img src="https://rkmsm.org/events/images/photothumb.jpg" alt="profile-pic" />
                    </div>
                    <h1>
                        {user.fullName} <span>{user.email}</span>
                    </h1>
                </div>
            </header>
                <div className="profile-card_about">
                    <h2>Member since:</h2>
                    <p>{new Date(user.createdAt).toLocaleDateString()}</p>
                    <div className='edit-account' onClick={() => { setIsEditing(true) }}>
                        <FaPencilAlt />
                    </div>
                    <footer className="profile-card_footer">
                        {isEditing ? null : (
                            <button onClick={handleLogout} className="logout-button">
                                Logout
                            </button>
                        )}
                    </footer>
                </div>
            </div>}
        </section>
    );
}

export default Account;
