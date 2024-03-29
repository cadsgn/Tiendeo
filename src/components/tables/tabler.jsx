import React from 'react'
import Data from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardR from '../../components/cards/cardr.jsx'

class Tabler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardr: [] }
  }
  addCardr = ev => { this.setState(prev => ({ cardr: [...prev.cardr, ''] })) }
  render() {
    return (
      <div>
        {Data.map((tableInfo, index)=>{
          if(tableInfo.id === 3 ) {
            return <div class='item Review'>
              <h2>{tableInfo.taskCategory}</h2>
              <CardR />
              {this.state.cardr.map(node => <CardR />)}
              <div onClick={this.addCardr} id="bg" class="addTask">
                <p>Add task&nbsp;<FontAwesomeIcon icon="plus-circle" /></p>
              </div>
            </div>
          } return "" })}
      </div>
    );
  }
}

export default Tabler;
