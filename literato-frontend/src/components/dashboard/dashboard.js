import React, { Component }from 'react'
import Header from './header'
import Sidebar from './sidebar'
import SearchToAdd from '../googleComponents/search'

class Dashboard extends Component {
  render() {
    return(
      <div>
        <Header />
        <SearchToAdd />
        <Sidebar />
      </div>
    )
  }
}

export default Dashboard;
