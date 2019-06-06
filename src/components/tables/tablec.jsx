import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import Data from '../../data/data.json'
import CardC from '../../components/cards/cardc.jsx'

class Tablec extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardc: [] }
  }
  addCardc = ev => { this.setState(prev => ({ cardc: [...prev.cardc, ''] })) }
  // componentDidMount() {
  //   $("#bg").click(function() {
  //     window.renderMyReactApp($('#a1')[0]);
  //   });
  // }
  render() {
    return (
      <div>
        {Data.map((tableInfo, index)=>{
          if(tableInfo.id === 4 ) {
            return <div class='item Complete'>
              <h2>{tableInfo.taskCategory}</h2>
              <CardC />
              {this.state.cardc.map(node => <CardC />)}
              <div onClick={this.addCardc} id="bg" class="addTask">
                <p>Add task</p>
              </div>
            </div>
          }})}
      </div>
    );
  }
}

export default Tablec;
