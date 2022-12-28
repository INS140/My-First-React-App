import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className="container">
      <img src="./images/image-qr-code.png" alt="QR code for Frontend Mentor website" />
      <div className="text-box">
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

function Attribute() {
  return (
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/INS140" target="_blank">INS140</a>.
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Attribute />
  </React.StrictMode>
);

reportWebVitals();
