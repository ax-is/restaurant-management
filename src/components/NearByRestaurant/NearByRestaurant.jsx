import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../../actions/restaurantAction";
import RestaurantCard from "../RestaurantPage/RestaurantCard";
import Loading from "../Loading/Loading";

function NearByRestaurant() {
  const [restaurantType, setRestaurantType] = useState("All");

  const dispatch = useDispatch();
  const { restaurants, loading, error } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setRestaurantType(selectedType);
  };

  const filteredRestaurants =
    restaurantType === "All"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.type === restaurantType);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="nearby-main">
      <h2 className="rest-near-you">Restaurants Near You ({restaurants.length})</h2>
      <div className="filter-container">
        <label htmlFor="type">Filter by Type:</label>
        <select id="type" name="type" value={restaurantType} onChange={handleTypeChange}>
          <option value="All">All</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>
      </div>
      <div className="restaurant-main-div">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.restaurantName}
            restaurantName={restaurant.restaurantName}
            rating={restaurant.rating}
            type={restaurant.type}
            openhours={restaurant.openhours}
            id={restaurant._id}
          />
        ))}
      </div>
    </div>
  );
}

export default NearByRestaurant;
