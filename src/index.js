
import React from 'react';
import ReactDOM from 'react-dom/client';
import Lenis from 'lenis';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
