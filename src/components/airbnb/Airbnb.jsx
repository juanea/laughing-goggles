import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import katieZaferes from '../../assets/airbnb/katie-zaferes.png';
// import weddingPhoto from '../../assets/airbnb/wedding-photography.png';
// import mountainBike from '../../assets/airbnb/mountain-bike.png';

export default function Airbnb() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={katieZaferes}
        name="Katie Zafares"
        rating={5.0}
        reviewCount="6"
        country="USA"
        title="Life Lessons with Katie Zafares"
        price={136}
      />
    </div>
  );
}
