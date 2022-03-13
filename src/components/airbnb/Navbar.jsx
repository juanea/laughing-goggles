import React from 'react';
import AIRBNBLOGO from '../../assets/airbnb/airbnb-logo.png';
import '../../stylesheet/airbnb.css';

export default function Navbar() {
  return (
    <header>
      <nav className="nav">
        <img src={AIRBNBLOGO} className="airbnb-logo" alt="Airbnb logo" />
      </nav>
    </header>
  );
}
