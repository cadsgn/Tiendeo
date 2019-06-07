import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Data from '../../data/data.json'

// var contentInfo = null

class CardB extends React.Component {
  render() {
    return (
      <div>
          {Data.map((tableInfo, index)=>{
            // if(tableInfo.taskCategory === 'Backlog' && contentInfo !== tableInfo.taskContent ) {
            if(tableInfo.taskCategory === 'Backlog') {
            // contentInfo = tableInfo.taskContent
            return <div className='tasks Backlog' key={tableInfo.slug}>
              <div className="tasksHeader">
                {tableInfo.taskPriority}
              </div>
              <div className="tasksContent">
                <p>{tableInfo.taskContent}</p>
              </div>
              <div className="tasksFooter">
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

export default CardB;
