import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import Data from '../../data/data.json'
import CardB from '../../components/cards/cardb.jsx'

// window.renderMyReactApp = element => ReactDOM.render(<CardB />, element);

class Tableb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardb: [] }
  }
  addCardb = ev => { this.setState(prev => ({ cardb: [...prev.cardb, ''] })) }
  // componentDidMount() {
  //   $("#bg").click(function() {
  //     window.renderMyReactApp($('#a1')[0]);
  //   });
  // }
  render() {
    return (
      <div>
        {Data.map((tableInfo, index)=>{
          if(tableInfo.id === 1 ) {
            return <div class='item Backlog'>
              <h2>{tableInfo.taskCategory}</h2>
              <CardB />
              {this.state.cardb.map(node => <CardB />)}
              <div onClick={this.addCardb} id="bg" class="addTask">
                <p>Add task</p>
              </div>
            </div>
          }})}
      </div>
    );
  }
}

export default Tableb;
