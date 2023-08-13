import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderCard from './OrderCard';
import Loading from '../Loading/Loading';
import DoughnutChart from './DoughnutChart.jsx';
import ShowChart from './ShowChart';
import { fetchItems } from '../../actions/itemsActions';
import { fetchOrdersByUserId } from '../../actions/orderAction';

function CustomerOrders() {
    const dispatch = useDispatch();

    const items = useSelector(state => state.item.items);
    const userId = useSelector((state) => state.auth.user._id);
    const isLoading = useSelector(state => state.item.loading);
    const orders = useSelector(state => state.order.orders);
    const error = useSelector(state => state.order.error);

    const [toshow, setToShow] = useState(false);
    const [chartOption, setChartOption] = useState('quantity');

    useEffect(() => {
        dispatch(fetchItems());
        dispatch(fetchOrdersByUserId(userId));
    }, [dispatch, userId]);

    if (isLoading) {
        return <Loading />;
    }

    const itemsData = orders.map((order) => {
        const orderItems = order.itemArray.map((item) => {
            const itemData = items.find((i) => i._id === item.id);
            return {
                id: item.id,
                name: itemData.itemName,
                image: itemData.itemImage,
                price: itemData.itemPrice,
                restaurantName: itemData.restaurantName,
                quantity: item.quantity,
            };
        });
        return {
            orderId: order._id,
            items: orderItems,
            createdAt: order.createdAt,
        };
    });

    const handleQuantityClick = () => {
        setChartOption('quantity');
    }

    const handlePriceClick = () => {
        setChartOption('price');
    }
    const handleToggle = () => {
        setToShow(!toshow);
    }
    if (error) {
        return <h2 style={{ textAlign: 'center' }}>Error: {error}</h2>;
    }
    return (
        <div className='orders-main-div'>
            <h2>Your Orders</h2>
            <ShowChart
                handlePriceClick={handlePriceClick}
                handleQuantityClick={handleQuantityClick}
                handleToggle={handleToggle}

            />
            {itemsData.map((order) => (
                <div key={order.orderId} className='order-card-div'>
                    <p className='ordered-time-date'>
                        <span>On:</span> {new Date(order.createdAt).toLocaleDateString()}
                        <span> At :</span> {new Date(order.createdAt).toLocaleTimeString()}
                    </p>
                    {toshow ? (
                        <DoughnutChart
                            data={{
                                labels: order.items.map((item) => item.name),
                                datasets: [
                                    {
                                        label: chartOption === 'quantity' ? 'Order Items Quantity' : 'Order Items Total Price',
                                        data: order.items.map((item) => chartOption === 'quantity' ? item.quantity : item.price * item.quantity),
                                        backgroundColor: ['#F1948A', '#A569BD', '#2E86C1', '#A9DFBF', '#F7DC6F', '#D0D3D4'],
                                    },
                                ],
                            }}
                            title={`Order ID: ${order.orderId}`}
                        />
                    ) : (
                        <>
                            {order.items.map((item) => (
                                <OrderCard item={item} quantity={item.quantity} key={item.id} />
                            ))}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}


export default CustomerOrders;