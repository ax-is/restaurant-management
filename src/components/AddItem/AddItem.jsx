import "./additem.css";
import React, { useState } from "react";
import { API_URL } from "../../types/types";
import { useSelector } from "react-redux";

function AddItem({ onCancel }) {
    const restaurantName = useSelector(state => state.auth.user.restaurantName);
    const [itemName, setItemName] = useState("");
    const [itemImage, setItemImage] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemType, setItemType] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            itemName,
            itemImage,
            itemPrice,
            itemDescription,
            itemType,
            restaurantName
        };
        fetch(`${API_URL}/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Item added successfully to API:", data);
            })
            .catch((error) => {
                console.error("Error adding item to API:", error);
            });
        resetfields();
    };

    const resetfields = () => {
        onCancel();
        setItemName("");
        setItemImage("");
        setItemPrice("");
        setItemDescription("");
        setItemType("");
    }
    const handleCancel = () => {
        resetfields();
    };

    return (
        <div className="add-item-overlay">
            <div className="add-item-main">
                <h1>Add Item</h1>
                <form onSubmit={handleSubmit} className="add-item-form">
                    <label htmlFor="itemName">Item Name</label>
                    <input
                        type="text"
                        id="itemName"
                        placeholder="Item Name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                    <label htmlFor="itemImage">Item Image URL</label>
                    <input
                        type="url"
                        id="itemImage"
                        placeholder="Item Image URL"
                        value={itemImage}
                        onChange={(e) => setItemImage(e.target.value)}
                        required
                    />
                    <label htmlFor="itemPrice">Item Price</label>
                    <input
                        type="number"
                        id="itemPrice"
                        placeholder="Item Price"
                        value={itemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                        required
                    />
                    <label htmlFor="itemDescription">Item Description</label>
                    <textarea
                        id="itemDescription"
                        placeholder="Item Description"
                        value={itemDescription}
                        className="itemDescription"
                        onChange={(e) => setItemDescription(e.target.value)}
                        required
                    ></textarea>
                    <label htmlFor="itemType">Item Type</label>
                    <select
                        id="itemType"
                        className="itemType"
                        value={itemType}
                        onChange={(e) => setItemType(e.target.value)}
                        required
                    >
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-vegetarian">Non-vegetarian</option>
                    </select>

                    <div className="add-item-buttons">
                        <button type="button" onClick={handleCancel} className="cancel-button">
                            Cancel
                        </button>
                        <button type="submit">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddItem;
