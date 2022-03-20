import React from 'react';
import '../../stylesheet/airbnb.css';
import PropTypes from 'prop-types';
import CARDSTAR from '../../assets/airbnb/star.png';

export default function Card({
  img,
  openSpots,
  rating,
  reviewCount,
  title,
  price,
  location,
}) {
  return (
    <div className="card">
      {openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img src={img} className="card--image" alt="Card" />
      <div className="card--stats">
        <img src={CARDSTAR} className="card--star" alt="Star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p className="card--title">{title}</p>
      <p>
        <span className="bold">From ${price}</span>/ person
      </p>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  openSpots: PropTypes.number,
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
  location: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

Card.defaultProps = {
  img: 'img',
  openSpots: '0',
  rating: '4.8',
  reviewCount: '100',
  location: 'IS',
  title: 'AirBnb Experiences',
  price: '100',
};
