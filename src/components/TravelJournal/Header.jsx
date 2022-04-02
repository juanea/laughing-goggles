import React from 'react';
import '../../stylesheet/travel_journal.css';
import WORLDLOGO from '../../assets/TravelJournal/Fill213.png';

export default function Header() {
  return (
    <header>
      <div className="header--background">
        <img src={WORLDLOGO} className="header--logo" alt="World" />
        <p className="header--title">my travel journal.</p>
      </div>
    </header>
  );
}
