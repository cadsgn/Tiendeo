import React from 'react';
import ReactDOM from 'react-dom';

class Hamburger extends React.Component {
  render() {
    return (
      <div class='wrapper'>
        <div class="sidebar">
          <ul>
            <li>Manage</li>
            <li class='active'>Tasks</li>
            <li>Schedule</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Hamburger;
