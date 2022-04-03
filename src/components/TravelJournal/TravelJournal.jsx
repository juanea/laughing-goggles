import React from 'react';
import Header from './Header';
import Tile from './Tile';
import data from './data';
import '../../stylesheet/travel_journal.css';

export default function TravelJournal() {
  const locations = data.map((item) => <Tile key={item.id} item={item} />);
  return (
    <div>
      <Header />
      <div className="header--spaceTile" />
      <section className="card--list">{locations}</section>
    </div>
  );
}
