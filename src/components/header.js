import React from 'react';
import $ from 'jquery';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $("#menuButton").click(function() {
      $('.sidebar').fadeIn();
      $('.wrapper').css( "grid-template-columns", "150px auto" );
    });
  }
  render() {
    return (
      <div class='header'>
        <div id="menuButton" class="button menu-button">
          <h4>TaskSky</h4>
        </div>
        <div>
          <h4>Search for tasks...</h4>
        </div>
        <div>
          <h4>not</h4>
        </div>
        <div>
          <h4>M. Thompson</h4>
        </div>
      </div>
    );
  }
}

export default Header;
