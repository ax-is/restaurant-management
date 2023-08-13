import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../media/dish-topview.jpg';
import image2 from '../../media/table-images.jpg';
import image3 from '../../media/meal-1.png';
import image4 from '../../media/delivery.jpg';
// import image5 from '../../media/sale.png';
function CarouselComponent() {
    return (
        <div className="carousel-container">
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay={false}
                infiniteLoop={true}
                interval={5000}>
                <div className='by-search'>
                    <h1>Indulge in freshly <br /> prepared meal,<br /> just the way <br /> you like.</h1>
                    <img src={image3} alt="res 3" />
                </div>
                <div className='top-view'>
                    <h1>Savor irresistible flavors with our food sale, a treat for your taste buds!</h1>
                    <img className='top-view-img'src={image1} alt="res 1" />
                </div>
                <div className='by-table'>
                    <input type="text" placeholder="Ideal Dining Table For You..." />
                    <img src={image2} alt="res 2" />
                </div>
                <div className='delivery'>
                    <img src={image4} alt="res 2" />
                </div>

            </Carousel>
        </div>
    );
}

export default CarouselComponent;
