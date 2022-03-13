import React from 'react';
import '../../stylesheet/airbnb.css';
import MOSAIC from '../../assets/airbnb/photo-grid.png';

export default function Hero() {
  return (
    <section className="hero">
      <img src={MOSAIC} className="hero--photo" alt="Mosaic photos" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities let by one-of-a-kind hosts-all without leaving home.
      </p>
    </section>
  );
}
