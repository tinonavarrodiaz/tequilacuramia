import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/Routes';
import reportWebVitals from './reportWebVitals';
import Access from './components/Access';

import './scss/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <Access />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
