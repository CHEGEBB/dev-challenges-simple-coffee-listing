import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import bgCafeImage from './images/bg-cafe.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Use a container with the background image */}
    <div className="container">
      {/* Black background covering 70% of the viewport height */}
      <div className="black-background"></div>
      {/* Image covering the remaining top portion */}
      <img src={bgCafeImage} alt="Cafe background" className="cafe-image" />
    </div>
    <App />
  </React.StrictMode>
);
