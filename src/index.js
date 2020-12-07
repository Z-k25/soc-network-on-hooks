import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './pages/body';
import Header from './components/header';
import { UserContextProvider } from './context/userContext';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <Header />
        <Body />
      </Router>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


