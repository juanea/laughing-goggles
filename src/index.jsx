import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Lesson1 from './components/Lesson1';
import reportWebVitals from './reportWebVitals';
import ReactFacts24 from './components/ReactFacts24';

ReactDOM.render(
  <React.StrictMode>
    {/* <Lesson1 /> */}
    <ReactFacts24 />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
