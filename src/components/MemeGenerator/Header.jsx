import React from 'react';
import './meme_generator.css';
import MEMEGENERATOR from '../../assets/MemeGenerator/TrollFace.svg';

export default function Header() {
  return (
    <header className="header--background">
      <img src={MEMEGENERATOR} className="header--logo" alt="Troll Face" />
      <h2 className="header--header">Meme Generator</h2>
      <h4 className="header--course">React Course - Project 3</h4>
    </header>
  );
}
