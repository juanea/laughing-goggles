import React from 'react';
import '../../stylesheet/airbnb.css';
import PropTypes from 'prop-types';
import CARDSTAR from '../../assets/airbnb/star.png';

export default function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
}) {
  return (
    <div className="card">
      <img src={img} className="card--image" alt="Card" />
      <div className="card--stats">
        <img src={CARDSTAR} className="card--star" alt="Star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{country}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className="bold">From ${price}</span>/ person
      </p>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
  country: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

Card.defaultProps = {
  img: 'img',
  rating: '4.8',
  reviewCount: '100',
  country: 'IS',
  title: 'AirBnb Experiences',
  price: '100',
};
