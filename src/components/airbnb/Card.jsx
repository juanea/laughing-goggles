import React from 'react';
import '../../stylesheet/airbnb.css';
import PropTypes from 'prop-types';
import CARDIMAGE from '../../assets/airbnb/katie-zaferes.png';
import CARDSTAR from '../../assets/airbnb/star.png';

export default function Card({ name, rating, reviewCount, country, price }) {
  return (
    <div className="card">
      <img src={CARDIMAGE} className="card--image" alt="Card" />
      <div className="card--stats">
        <img src={CARDSTAR} className="card--star" alt="Star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{country}</span>
      </div>
      <p>Life Lessons with</p>
      <p>{name}</p>
      <p>
        <span className="bold">From ${price}</span>/ person
      </p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
  country: PropTypes.string,
  price: PropTypes.number,
};

Card.defaultProps = {
  name: 'John Doe',
  rating: '4.8',
  reviewCount: '100',
  country: 'IS',
  price: '100',
};
