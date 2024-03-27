import React from 'react';

const StarRating = ({ averageStars }) => {
  // Round the averageStars to the nearest 0.5
  const roundedStars = Math.round(averageStars * 2) / 2;

  // Generate an array of star icons based on the roundedStars
  const starIcons = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedStars) {
      starIcons.push(<span key={i} className="star">&#9733;</span>); // Full star
    } else {
      starIcons.push(<span key={i} className="star">&#9734;</span>); // Empty star
    }
  }

  return <div className="star-rating">{starIcons}</div>;
};

export default StarRating;
