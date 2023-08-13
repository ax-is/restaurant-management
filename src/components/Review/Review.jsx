import React, { useState, useEffect } from 'react';
import './ReviewCarousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ReviewCarousel({ reviews }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % reviews.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, reviews.length]);

    const displayedReviews = [
        reviews[currentIndex],
        reviews[(currentIndex + 1) % reviews.length],
        reviews[(currentIndex + 2) % reviews.length],
        reviews[(currentIndex + 3) % reviews.length]
    ];

    return (
        <div className="review-main">
            <h1>What others are saying</h1>
            <div className='review-carousel'>
                {displayedReviews.map((review, index) => (
                    <div key={index} className={`review active`}>
                        <div className="star-rating">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <FontAwesomeIcon
                                    key={i}
                                    icon={faStar}
                                    className={`star ${i < review.rating ? 'filled' : ''}`}
                                />
                            ))}
                        </div>
                        <p className="review-text">{review.text}</p>
                        <p className="user-name">-{review.user}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewCarousel;
