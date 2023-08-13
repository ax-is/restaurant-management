import React from "react";
const OrderCard = ({ item, quantity }) => {
    const isVegetarian = item.type === "vegetarian";
    return (
        <div className="item-card">
            {isVegetarian ? (
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg" className="item-card-type" alt="veg" />
            ) : (
                <img src="https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg" className="item-card-type" alt="non-veg" />
            )}
            <img
                className="order-card-image"
                src={item.image}
                alt={item.name}
            ></img>
            <div className="item-card-content">
                <p className="item-card-name">Name: {item.name} </p>
                <p className="rest-name">{item.restaurantName}</p>
                <p className="item-card-price">₹{item.price}</p>
                <p className="item-quantity">Quantity: {quantity}</p>
            </div>
        </div>
    );
};

export default OrderCard;
