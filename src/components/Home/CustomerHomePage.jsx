import Break from "../Break/Break";
import CarouselComponent from "../Carousel/CarouselComponent";
import Footer from "../Footer/Footer";
import NearByRestaurant from "../NearByRestaurant/NearByRestaurant";
import RecipeComponent from "../Recipe/RecipeComponent";
import ReviewCarousel from "../Review/Review";

function CustomerHomePage() {
  const reviews = [
    {
        rating: 4,
        text: "Amazing food! Loved the experience.",
        user: "Alice Johnson"
    },
    {
        rating: 5,
        text: "The best restaurant in town. Highly recommended!",
        user: "Bob Smith"
    },
    {
        rating: 4,
        text: "Great atmosphere and delicious dishes. Will come back again.",
        user: "Catherine Brown"
    },
    {
        rating: 3,
        text: "Decent place with good variety of options.",
        user: "David Miller"
    },
    {
        rating: 5,
        text: "Absolutely fantastic. Every dish is a masterpiece!",
        user: "Ella Davis"
    },
    {
        rating: 4,
        text: "Friendly staff and a wide selection of dishes. Loved it!",
        user: "Frank Wilson"
    },
    {
        rating: 3,
        text: "Good place to dine, but service can be improved.",
        user: "Grace Taylor"
    },
];
  return (
    <div className="customer-home-main">
      <CarouselComponent />
      <NearByRestaurant />
      <RecipeComponent />
      <ReviewCarousel reviews={reviews}/>
      <Break/>
      <Footer/>
    </div>
  );
}

export default CustomerHomePage;
