import React from 'react';
import '../stylesheet/style.css';

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="../logo.svg" alt="React logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Echavarria development. All rights reserved</small>
    </footer>
  );
}

function MainContent() {
  return (
    <>
      <h1>Reasons I&#39;m excited to learn React</h1>
      <ol>
        <li>
          It is a popular library, I&#39;ll be able to fit in with the cool
          kids!
        </li>
        <li>I&#39;m more likely to get a job as a developer if I know React</li>
      </ol>
    </>
  );
}

function Lesson1() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Lesson1;
