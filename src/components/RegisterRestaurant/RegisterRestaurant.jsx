import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from '../../types/types';

function RegisterRestaurant({ onClose }) {
    const [password, setPassword] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [address, setAddress] = useState('');
    const [openhours, setOpenHours] = useState('');
    const [type, setType] = useState('');
    const user = useSelector(state => state.auth);
    const email = user.user.email;
    const userId = user.user._id;
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Form submitted:', { email, password, restaurantName, address, openhours, type });
        const newRestaurant = {
            restaurantName,
            userId,
            email,
            password,
            address,
            openhours,
            type
        }
        fetch(`${API_URL}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(userData => {
                const user = userData.find(user => user.email === email && user.password === password);
                if (user) {
                    console.log("Correct Password");
                    fetch(`${API_URL}/restaurants`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newRestaurant),
                    })
                        .then(response => response.json())
                        .then((data) => {
                            if (data.message) {
                                alert(data.message);
                                resetfields();
                            } else if (data.error) {
                                alert(data.error);
                            }
                        })
                        .catch((error) => {
                            console.log("Restaurant Registration Failed", error);
                        });

                } else {
                    console.log("Please Check your password");
                }
            })
            .catch(error => {
                console.error('Error fetching your info:', error);
            });
    };
    const resetfields = () => {
        setAddress('');
        setOpenHours('');
        setPassword('');
        setRestaurantName('');
        setType('');
    }
    const handleCancel = () => {
        resetfields();
        onClose(false);
    };

    return (
        <div className="add-item-overlay">
            <div className="add-item-main">
                <h1>Register Restaurant</h1>
                <form onSubmit={handleSubmit} className="add-item-form">
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        {email}
                        {/* <p
                            type="email"
                            id="email"
                            value={user.user.email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        /> */}
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="restaurant-name">Restaurant Name:</label>
                        <input
                            type="text"
                            id="restaurant-name"
                            value={restaurantName}
                            onChange={(event) => setRestaurantName(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="open-hours">Open Hours:</label>
                        <input
                            type="text"
                            id="open-hours"
                            value={openhours}
                            onChange={(event) => setOpenHours(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="type">Type:</label>
                        <select id="type" value={type} onChange={(event) => setType(event.target.value)} required>
                            <option value="both">Both</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="non-vegetarian">Non-Vegetarian</option>
                        </select>
                    </div>
                    <button type='button' onClick={() => handleCancel()}>Cancel</button>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterRestaurant;
