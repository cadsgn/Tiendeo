import React, { Component } from 'react'
import Data from '../../data/data.json'

var contentInfo = null

class CardB extends React.Component {
  render() {
    return (
      <div>
          {Data.map((tableInfo, index)=>{
            if(tableInfo.taskCategory === 'Backlog' && contentInfo !== tableInfo.taskContent ) {
            // contentInfo = tableInfo.taskContent
            return <div className='tasks' key={tableInfo.slug}>
              <div className="tasksHeader">
                {tableInfo.taskPriority}
              </div>
              <div className="tasksContent">
                <p>{tableInfo.taskContent}</p>
              </div>
              <div className="tasksFooter">
                <div className="tasksComents">{tableInfo.taskComents}</div>
                <div className="tasksFiles">{tableInfo.taskFiles}</div>
                <div className="tasksUser">asdf</div>
              </div>
            </div>
          }})}
        </div>
    );
  }
}

export default CardB;
