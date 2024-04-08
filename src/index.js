import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import bgCafeImage from './images/bg-cafe.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="black-background"></div>
      <img src={bgCafeImage} alt="Cafe background" className="cafe-image" />
    <App />
  </React.StrictMode>
);
