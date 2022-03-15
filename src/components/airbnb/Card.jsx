import React from 'react';
import '../../stylesheet/airbnb.css';
import CARDIMAGE from '../../assets/airbnb/katie-zaferes.png';
import CARDSTAR from '../../assets/airbnb/star.png';

export default function Card() {
  return (
    <div className="card">
      <img src={CARDIMAGE} className="card--image" alt="Card" />
      <div className="card--stats">
        <img src={CARDSTAR} className="card--star" alt="Star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zafares</p>
      <p>
        <span className="bold">
          From $136
        </span>
        / person
      </p>
    </div>
  );
}
