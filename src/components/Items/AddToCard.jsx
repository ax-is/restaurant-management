import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { useState } from "react";
import Alert from "../Alert/Alert";

function AddToCart({id, name, imageUrl, description, price, type }) {
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);
    const handleAddToCart = () => {
        const item = {
            id,
            name,
            imageUrl,
            description,
            price,
            type,
        }
        dispatch(addToCart(item));
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };
    const hideAlert = () => {
        setShowAlert(false);
    };

    return (
        <>
            <button className="card-buttons" onClick={handleAddToCart}>
                <FaShoppingCart /> Add To Cart
            </button>
            {showAlert && (
                <Alert
                    type="success"
                    message="Item has been added to your cart."
                    onHide={hideAlert}
                />
            )}
        </>
    );
}

export default AddToCart;