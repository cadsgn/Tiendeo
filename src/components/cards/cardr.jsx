import React, { Component } from 'react'
import Data from '../../data/data.json'

class CardR extends React.Component {
  render() {
    return (
      <div>
          {Data.map((tableInfo, index)=>{
            if(tableInfo.taskCategory === 'Review') {
            return <div class='tasks'>
              <div class="tasksHeader">
                {tableInfo.taskPriority}
              </div>
              <div class="tasksContent">
                <p>{tableInfo.taskContent}</p>
              </div>
              <div class="tasksFooter">
                <div class="tasksComents">{tableInfo.taskComents}</div>
                <div class="tasksFiles">{tableInfo.taskFiles}</div>
                <div class="tasksUser">asdf</div>
              </div>
            </div>
          }})}
        </div>
    );
  }
}

export default CardR;
