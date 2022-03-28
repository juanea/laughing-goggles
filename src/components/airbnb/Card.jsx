import React from 'react';
import '../../stylesheet/airbnb.css';
// import PropTypes from 'prop-types';
import CARDSTAR from '../../assets/airbnb/star.png';

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE';
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} className="card--image" alt="Card" />
      <div className="card--stats">
        <img src={CARDSTAR} className="card--star" alt="Star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p>
        <span className="card--price">From ${props.item.price}</span>/ person
      </p>
    </div>
  );
}
// Card.propTypes = {
//  props: PropTypes.arrayOf,
//  title: PropTypes.string,
//  price: PropTypes.number,
//  coverImg: PropTypes.string,
//  stats: PropTypes.objectOf({
//    rating: PropTypes.number,
//    reviewCount: PropTypes.number,
//  }),
//  location: PropTypes.string,
//  openSpots: PropTypes.number,
// };
//
// Card.defaultProps = {
//  props: 'Hello',
//  title: 'AirBnb Experiences',
//  price: '100',
//  coverImg: 'img',
//  stats: {
//    rating: '4.8',
//    reviewCount: '100',
//  },
//  location: 'IS',
//  openSpots: '0',
// };
