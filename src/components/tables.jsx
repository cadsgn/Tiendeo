import React from 'react'
import Tableb from '../components/tables/tableb.jsx'
import Tablep from '../components/tables/tablep.jsx'
import Tabler from '../components/tables/tabler.jsx'
import Tablec from '../components/tables/tablec.jsx'

class Tables extends React.Component {
  render() {
    return (
      <div class='main-content'>
        <div class='title'>
          <h1>Tasks</h1>
        </div>
        <div class='tables'>
          <Tableb />
          <Tablep />
          <Tabler />
          <Tablec />
        </div>
      </div>
    );
  }
}

export default Tables;
