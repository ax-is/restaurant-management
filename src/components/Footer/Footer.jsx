import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>About Us</h4>
                        <p>
                            Bringing Culinary Delights to Your Doorstep: Discover a world of flavors with our <br /> restaurant app, where every dish <br />tells a delicious story.
                        </p>
                    </div>
                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li>Restaurant Management</li>
                            <li>Food Delivery</li>
                            <li>Daily Recipe Subscription</li>
                            <li>Order Management</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <p>
                            F-148 Saket
                            <br />
                            New Delhi, India
                            <br />
                            Phone: (123) 456-7890
                            <br />
                            Email: info@restapp.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} Restaurant Management App. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
