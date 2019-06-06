import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Data from '../../data/data.json'
import CardP from '../../components/cards/cardp.jsx'

class Tablep extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardp: [] }
  }
  addCardp = ev => { this.setState(prev => ({ cardp: [...prev.cardp, ''] })) }
  render() {
    return (
      <div>
        {Data.map((tableInfo, index)=>{
          if(tableInfo.id === 2 ) {
            return <div class='item Progress'>
              <h2>{tableInfo.taskCategory}</h2>
              <CardP />
              {this.state.cardp.map(node => <CardP />)}
              <div onClick={this.addCardp} id="bg" class="addTask">
                <p>Add task</p>
              </div>
            </div>
          }})}
      </div>
    );
  }
}

export default Tablep;
