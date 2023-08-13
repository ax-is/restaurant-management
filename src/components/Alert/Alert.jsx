import React, { useState, useEffect } from "react";
import "./alert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const Alert = ({ type, message, onHide }) => {
    const [isActive, setIsActive] = useState(false);
    const [isProgressActive, setIsProgressActive] = useState(false);
    let timer1, timer2;

    const showAlert = () => {
        setIsActive(true);
        setIsProgressActive(true);

        timer1 = setTimeout(() => {
            setIsActive(false);
        }, 300);

        timer2 = setTimeout(() => {
            setIsProgressActive(false);
        }, 300);
    };

    const hideAlert = () => {
        setIsActive(false);
        setTimeout(() => {
            setIsProgressActive(false);
        }, 300);
        clearTimeout(timer1);
        clearTimeout(timer2);
        onHide();
    };

    useEffect(() => {
        showAlert();
    });

    return (
        <div>
            <div className={`alert ${type} ${isActive ? "active" : ""}`}>
                <div className="alert-content">
                    <FontAwesomeIcon
                        icon={faExclamationCircle}
                        className="exclamation"
                        size="lg"
                        fixedWidth
                    />
                    <div className="message">
                        {message}
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={faTimes}
                    className="close"
                    size="lg"
                    fixedWidth
                    onClick={hideAlert}
                />
                <div className={`progress ${type} ${isProgressActive ? "active" : ""}`}></div>
            </div>
        </div>
    );
};

export default Alert;
