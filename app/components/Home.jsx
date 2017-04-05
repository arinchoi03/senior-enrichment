import React, { Component } from 'react'
import Campuses from '../containers/Campuses'

//Home container???

const Home = ({children}) => {
  return (
    <div>
    <h1>Interplanetary Academy of JS</h1>
    <div name = "col-xs-2">
      {children /*this allows it to have children routes*/}
    </div>
    </div>
    )
}

export default Home;
