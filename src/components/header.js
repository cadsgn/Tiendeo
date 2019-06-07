import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery';

class Header extends React.Component {
  componentDidMount() {
    $("#menuButton").click(function() {
      $('.sidebar').toggleClass('active');
      $('.wrapper').toggleClass('active');
    });
    $(window).resize(function(){
      if($(window).width()<701){
      $('.sidebar').removeClass('active');
      $('.wrapper').removeClass('active');
     }
    });
  }
  render() {
    return (
      <div class='header'>
        <div id="menuButton" class="button menu-button">
          <h4><span className="headerIcon"><FontAwesomeIcon icon="bars" /></span><span className="headerHide">&nbsp;TaskSky</span></h4>
        </div>
        <div>
          <h4><FontAwesomeIcon icon="search" /><span className="search headerHide">&nbsp;<input id="icon_prefix" type="text" placeholder="Search for tasks..." /></span></h4>
        </div>
        <div>
          <h4><FontAwesomeIcon icon="bell" /></h4>
        </div>
        <div>
          <h4><span className="headerHide">M. Thompson&nbsp;&nbsp;</span><FontAwesomeIcon icon="user" /></h4>
        </div>
      </div>
    );
  }
}

export default Header;
