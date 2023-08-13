import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchItems } from '../../actions/itemsActions';
import { fetchOrders } from '../../actions/orderAction'

import OrderCard from './OrderCard.jsx';
import Loading from '../Loading/Loading.jsx';
import DoughnutChart from './DoughnutChart.jsx';
import ShowChart from './ShowChart.jsx';
import { fetchRestaurants } from '../../actions/restaurantAction';
import NothingToDisplay from '../Pageoutfound/NothingToDisplay';

function RestaurantOrders() {
    const dispatch = useDispatch();

    const items = useSelector(state => state.item.items);
    const orders = useSelector(state => state.order.orders);
    const loading = useSelector(state => state.order.loading);
    const error = useSelector(state => state.order.error);
    const restaurantName = useSelector(state => state.auth.user.restaurantName);

    const [toshow, setToShow] = useState(false);
    const [chartOption, setChartOption] = useState('quantity');

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);
    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);
    useEffect(() => {
        dispatch(fetchRestaurants);
    }, [dispatch]);
    if(!restaurantName){
        return <NothingToDisplay/>;
    }
    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <h2 style={{ textAlign: 'center' }}>Error: {error}</h2>;
    }
    const itemsData = orders.map((order) => {
        const orderItems = order.itemArray.map((item) => {
            const itemId = item.id;
            const filteredItems = items.filter(item => item._id === itemId);
            const restaurantItems = filteredItems.filter(item => item.restaurantName === restaurantName);
            // console.log(restaurantItems);
            if (restaurantItems.length > 0) {
                return restaurantItems.map(restaurantItem => ({
                    id: item.id,
                    name: restaurantItem.itemName,
                    image: restaurantItem.itemImage,
                    price: restaurantItem.itemPrice,
                    restaurantName: restaurantItem.restaurantName,
                    quantity: item.quantity,
                }));
            }

            return [];
        });

        return {
            orderId: order._id,
            items: orderItems.flat(),
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
    if (itemsData.every((data) => data.items.length === 0)) {
        return <h2 style={{textAlign:'center'}}>No data to display</h2>;
      }
      
    return (
        <div className='orders-main-div'>
            <h2>Restaurant Orders</h2>
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


export default RestaurantOrders;