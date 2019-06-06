import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import $ from 'jquery';

import Data from '../data/data.json'
import CardB from '../components/cards/cardb.jsx'
import CardP from '../components/cards/cardp.jsx'
import CardR from '../components/cards/cardr.jsx'
import CardC from '../components/cards/cardc.jsx'
import Tableb from '../components/tables/tableb.jsx'
import Tablep from '../components/tables/tablep.jsx'
import Tabler from '../components/tables/tabler.jsx'
import Tablec from '../components/tables/tablec.jsx'

window.renderMyReactApp = element => ReactDOM.render(<CardB />, element);

class Tables extends React.Component {
  // componentDidMount() {
  //   $("#bg").click(function() {
  //     window.renderMyReactApp($('#a1')[0]);
  //   });
  // }
  render() {
    return (
      <div class='main-content'>
        <div class='title'>
          <h1>Tasks</h1>
        </div>
        <div class='tables'>
          <Tableb />
          <Tablep />
          <Tabler />
          <Tablec />
        </div>
      </div>
    );
  }
}

export default Tables;
