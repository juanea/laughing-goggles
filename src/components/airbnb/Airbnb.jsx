import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from './data';

export default function Airbnb() {
  const cards = data.map((item) => (
    <Card
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  ));

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}
