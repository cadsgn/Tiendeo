import React from 'react'
import Data from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardC from '../../components/cards/cardc.jsx'

class Tablec extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardc: [] }
  }
  addCardc = ev => { this.setState(prev => ({ cardc: [...prev.cardc, ''] })) }
  render() {
    return (
      <div>
        {Data.map((tableInfo, index) => {
          if(tableInfo.id === 4 ) {
            return <div class='item Complete'>
              <h2>{tableInfo.taskCategory}</h2>
              <CardC />
              {this.state.cardc.map(node => <CardC />)}
              <div onClick={this.addCardc} id="bg" class="addTask">
                <p>Add task&nbsp;<FontAwesomeIcon icon="plus-circle" /></p>
              </div>
            </div>
          } return "" })}
      </div>
    );
  }
}

export default Tablec;
