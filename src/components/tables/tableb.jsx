import React from 'react'
import Data from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardB from '../../components/cards/cardb.jsx'

// window.renderMyReactApp = element => ReactDOM.render(<CardB />, element);

class Tableb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardb: [] }
  }
  addCardb = ev => { this.setState(prev => ({ cardb: [...prev.cardb, ''] })) }
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
                <p>Add task&nbsp;<FontAwesomeIcon icon="plus-circle" /></p>
              </div>
            </div>
          } return "" })}
      </div>
    );
  }
}

export default Tableb;
