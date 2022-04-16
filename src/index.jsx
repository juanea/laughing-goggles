import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import Lesson1 from './components/Lesson1';
import reportWebVitals from './reportWebVitals';
// import ReactFacts24 from './components/ReactFacts24';
// import Airbnb from './components/airbnb/Airbnb';
// import TravelJournal from './components/TravelJournal/TravelJournal';
import MemeGenerator from './components/MemeGenerator/MemeGenerator';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <Lesson1 /> */}
  // <ReactFacts24 /> */}
  // <Airbnb /> */}
  // <TravelJournal />
  <MemeGenerator />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
