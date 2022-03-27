import React from 'react';
import '../../stylesheet/airbnb.css';
import PropTypes from 'prop-types';
import CARDSTAR from '../../assets/airbnb/star.png';

export default function Card({ props }) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.coverImg} className="card--image" alt="Card" />
      <div className="card--stats">
        <img src={CARDSTAR} className="card--star" alt="Star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span>/ person
      </p>
    </div>
  );
}
Card.propTypes = {
  props: PropTypes.arrayOf,
  title: PropTypes.string,
  price: PropTypes.number,
  coverImg: PropTypes.string,
  stats: PropTypes.objectOf({
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
  }),
  location: PropTypes.string,
  openSpots: PropTypes.number,
};

Card.defaultProps = {
  props: 'Hello',
  title: 'AirBnb Experiences',
  price: '100',
  coverImg: 'img',
  stats: {
    rating: '4.8',
    reviewCount: '100',
  },
  location: 'IS',
  openSpots: '0',
};
