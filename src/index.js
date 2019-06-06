import React from 'react';
import ReactDOM from 'react-dom';
import Hamburger from './components/hamburger.js'
import Header from './components/header.js'
import Tables from './components/tables.jsx'
import './styles/main.scss';

class WebApp extends React.Component {
  render() {
    return (
      <div>
          <div class='main-container'>
            <Header />
            <div className="wrapper">
            <Hamburger />
            <Tables />
            </div>
          </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <WebApp />,
  document.getElementById('root')
);
