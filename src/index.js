import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars , faSearch, faBell,  faUser, faCommentAlt, faPaperclip, faPlusCircle, faUserFriends, faTasks, faCalendarAlt, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons'
import Hamburger from './components/hamburger.js'
import Header from './components/header.js'
import Tables from './components/tables.jsx'
import './styles/main.scss';

library.add(faBars, faSearch, faBell, faUser, faCommentAlt, faPaperclip, faPlusCircle, faUserFriends, faTasks, faCalendarAlt, faCog, faChartBar )

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
