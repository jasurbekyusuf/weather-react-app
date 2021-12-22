import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {AppContainer} from "./components/app/AppContainer";
import "./assets/global.css"

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
