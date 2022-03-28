import React from 'react';
import '../../stylesheet/travel_journal.css';
import WORLDLOGO from '../../assets/TravelJournal/Fill213.png';

export default function Header() {
  return (
    <div className="header--background">
      <ul className="header--list">
        <li>
          <img src={WORLDLOGO} className="header--logo" alt="World" />
        </li>
        <li className="header--title">my travel journal.</li>
      </ul>
    </div>
  );
}
