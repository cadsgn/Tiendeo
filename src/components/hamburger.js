import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Hamburger extends React.Component {
  render() {
    return (
      <div class='wrapper'>
        <div class="sidebar">
          <ul>
            <li><FontAwesomeIcon icon="user-friends" /><span className="headerHide">&nbsp;Manage</span></li>
            <li class='active'><FontAwesomeIcon icon="tasks" /><span className="headerHide">&nbsp;Tasks</span></li>
            <li><FontAwesomeIcon icon="calendar-alt" /><span className="headerHide">&nbsp;Schedule</span></li>
            <li><FontAwesomeIcon icon="chart-bar" /><span className="headerHide">&nbsp;Reports</span></li>
            <li><FontAwesomeIcon icon="cog" /><span className="headerHide">&nbsp;Settings</span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Hamburger;
