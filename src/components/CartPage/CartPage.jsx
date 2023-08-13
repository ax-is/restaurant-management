import './cartpage.css';
import CartItem from './CartItem';
import Alert from '../Alert/Alert';

import { useState } from 'react';
import { API_URL } from '../../types/types';
import { clearCart } from '../../actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import Noitem from '../No Items/NoItems';

function CartPage() {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const cartItems = useSelector(state => state.cart.cartItems);
    const userId = useSelector(state => state.auth.user._id);
    const dispatch = useDispatch();
    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + item.item.price * item.quantity;
    }, 0);

    const handleOrderNow = async () => {
        try {
            const orderItems = cartItems.map(item => ({
                id: item.item.id,
                quantity: item.quantity,
            }));
            const response = await fetch(`${API_URL}/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ itemArray: orderItems, userId: userId })
            });
            const data = await response.json();
            console.log(data);
            dispatch(clearCart());
            setShowSuccessAlert(true);
            setSuccessMessage('Order placed successfully!');
        } catch (error) {
            console.log(error);
            setShowErrorAlert(true);
            setErrorMessage('Error placing order. Please try again later.');
        }
    };

    const handleSuccessAlertClose = () => {
        setShowSuccessAlert(false);
        setSuccessMessage('');
    };

    const handleErrorAlertClose = () => {
        setShowErrorAlert(false);
        setErrorMessage('');
    };

    return (
        <div className='cart-main-page'>

            {

                cartItems.length > 0 ?
                    <>
                        <h2>Total Items: {cartItems.length}</h2>
                        <div className='cart-item-container'>
                            {cartItems.map(item => (
                                <CartItem key={item.item.name} item={item.item} itemquantity={item.quantity} />
                            ))}
                        </div>
                        <div className='order-button-div'>
                            <button className='order-now-button' onClick={handleOrderNow}>
                                Order Now {`₹${totalPrice.toFixed(2)}`}
                            </button>
                        </div>
                    </> :
                    <><Noitem /></>
            }
            {showSuccessAlert && <Alert type='success' message={successMessage} onHide={handleSuccessAlertClose} />}
            {showErrorAlert && <Alert type='error' message={errorMessage} onHide={handleErrorAlertClose} />}
        </div>
    );
}

export default CartPage;
