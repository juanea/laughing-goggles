import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from './data';

export default function Airbnb() {
  const cards = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}
