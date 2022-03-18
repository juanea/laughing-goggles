import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';

/*
- img
- rating
- reviewCount
- country
- title
- price

*/

export default function Airbnb() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        name="Katie Zafares"
        rating={5.0}
        reviewCount="6"
        country="USA"
        title=""
        price={136}
      />
    </div>
  );
}
