import React, { Component } from 'react'

//Home container???

const Home = ({children}) => {
  return (
    <div>
      <h1>Sailor Interplanetary Academy of JS</h1>
        <div id='home'>
          {children /*this allows it to have children routes*/}
        </div>
    </div>
    )
}

export default Home;
