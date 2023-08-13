import React, { useState, useEffect } from "react";
import AddItem from "../AddItem/AddItem";
import ItemCard from "../Items/ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../actions/itemsActions";
import RegisterRestaurantFirst from "../RegisterRestaurant/RegisterRestaurantFirst";

function StaffHomePage() {
    const dispatch = useDispatch();
    const [showAddItem, setShowAddItem] = useState(false);
    const items = useSelector(state => state.item.items);
    const isRestaurant = useSelector(state => state.auth.user.restaurantName);
    const user = useSelector(state => state.auth.user);
    const restaurantName = isRestaurant ? user.restaurantName : null;
    
    const filteredItems = items.filter(item => item.restaurantName === restaurantName);
    const totalItems = filteredItems.length;

    useEffect(() => {
        if (restaurantName) {
            dispatch(fetchItems());
        }
    }, [dispatch, restaurantName]);

    const handleAddItemClick = () => {
        setShowAddItem(true);
    };

    const handleCancel = () => {
        setShowAddItem(false);
    };

    const handleEditClick = async (id, name, description, price) => {
        // console.log(id,name);
    };

    return (
        <div className="staff-home-main">
            {restaurantName ? (
                <>
                    <h1>{restaurantName}</h1>
                    <p>Total Items: {totalItems}</p>
                    {showAddItem ? null : (
                        <div className="add-item-button">
                            <button onClick={handleAddItemClick}>Add a new item</button>
                        </div>
                    )}
                    <div className="item-card-container">
                        {filteredItems.map((item) => (
                            <ItemCard
                                key={item.itemName}
                                name={item.itemName}
                                imageUrl={item.itemImage}
                                price={item.itemPrice}
                                description={item.itemDescription}
                                type={item.type}
                                onEditClick={(name, description, price) =>
                                    handleEditClick(item.id, name, description, price)
                                }
                            />
                        ))}
                    </div>
                    {showAddItem && <AddItem onCancel={handleCancel} />}
                </>
            ) : (
                <RegisterRestaurantFirst/>
            )}
        </div>
    );
}


export default StaffHomePage;
