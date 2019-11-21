/* eslint-disable react/prop-types */
import React from 'react';
import './RestaurantCard.scss';

const RestaurantCard = (props) => {
  const {
    imageUrl,
    title,
    categories,
    etaRange,
  } = props;

  return (
    <div className="restuarant-card">
      <img src={imageUrl} alt={title} className="restaurant-card__img" />
      <h2 className="restaurant-card__title">{title}</h2>
      <div className="restaurant-card__categories">
        {categories.join(' - ')}
      </div>
      <div className="restaurant-card__eta">
        {etaRange}
      </div>
    </div>
  );
};

export default RestaurantCard;
