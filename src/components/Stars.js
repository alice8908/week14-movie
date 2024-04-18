import React, { useState } from "react";

// Star rating system
// With 5 stars, user can review their movie

const StarRate = () => {
    const [rating, setRating] = useState(null);
    
    const StarClick = (rating) => {
        setRating(rating);
    }

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                key={i}
                onClick={() => StarClick(i)}
                style={{ cursor: "pointer", color: i <= rating ? "gold" : "silver"}}
                >
                    &#9733;
                </span>
            );
        }
        return stars;
    };
    return <div>{renderStars()}</div>;
};
export default StarRate;


