import React from 'react';
import REACTLOGO from '../assets/react-logo.png';

export default function Navbar() {
  return (
    <nav>
      <img src={REACTLOGO} className="nav--icon" alt="React logo" />
      <h3 className="nav--logo_text"> ReactFacts</h3>
      <h4 className="nav--title"> React Course - Project 1</h4>
    </nav>
  );
}
