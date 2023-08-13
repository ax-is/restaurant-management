import { Link } from 'react-router-dom';
import './restaurantcard.css';

function RestaurantCard({ restaurantName, rating, type, openhours }) {
    let icon = null;

    if (type === 'vegetarian') {
        icon = <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg" className="item-card-type" alt="veg" />;
    } else if (type === 'non-vegetarian') {
        icon = <img src="https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg" className="item-card-type" alt="non-veg"/>;
    } else {
        icon = (
            <div className='restaurant-type-icon both'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg" alt="veg" />
                <img src="https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg"  alt="non-veg"/>
            </div>
        );
    }

    return (
        <div>
            <div className="restaurant-card">
                {icon}
                <Link to={`/restaurants/${restaurantName}`} state={{ name: restaurantName }}>
                    <h1>{restaurantName}</h1>
                    <div className='restaurant-card-info'>
                        <p>Rating: {rating}</p>
                        <p>Open hours: {openhours}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default RestaurantCard;
