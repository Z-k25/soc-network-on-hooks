import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Body from './components/body';
import Header from './components/header';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Header />
        <Body />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


