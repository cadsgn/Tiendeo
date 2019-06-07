import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Data from '../../data/data.json'

class CardC extends React.Component {
  render() {
    return (
      <div>
          {Data.map((tableInfo, index)=>{
            if(tableInfo.taskCategory === 'Complete') {
            return <div class='tasks Complete'>
              <div class="tasksHeader">
                {tableInfo.taskPriority}
              </div>
              <div class="tasksContent">
                <p>{tableInfo.taskContent}</p>
              </div>
              <div class="tasksFooter">
                <div className="tasksComents"><FontAwesomeIcon icon="comment-alt" />&nbsp;{tableInfo.taskComents}</div>
                <div className="tasksFiles"><FontAwesomeIcon icon="paperclip" />&nbsp;{tableInfo.taskFiles}</div>
                <div className="tasksUser"><FontAwesomeIcon icon="user" /></div>
              </div>
            </div>
          } return "" })}
        </div>
    );
  }
}

export default CardC;
