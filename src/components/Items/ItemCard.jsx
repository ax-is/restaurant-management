import React from "react";
import EditItem from "./EditItem";
import AddToCart from "./AddToCard";

const ItemCard = ({ name, imageUrl, description, price, type, userType, id }) => {
    const isVegetarian = type === "vegetarian";
    const isCustomer = userType === "customer";
    return (
        <div className="item-card">
            {isVegetarian ? (
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg" className="item-card-type" alt="veg" />
            ) : (
                <img src="https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg" className="item-card-type" alt="non-veg" />
            )}
            <img
                className="item-card-image"
                src={imageUrl}
                alt={name}
            ></img>

            <div className="item-card-content">
                <p className="item-card-name">{name}</p>
                <p className="item-card-description">{description}</p>
                <p className="item-card-price">₹{price}</p>
                {!isCustomer ? <EditItem /> :
                    <AddToCart
                        key={id}
                        id={id}
                        name={name}
                        imageUrl={imageUrl}
                        price={price}
                        description={description}
                        type={type}
                        userType={userType}
                    />
                }
            </div>
        </div>
    );
};

export default ItemCard;
