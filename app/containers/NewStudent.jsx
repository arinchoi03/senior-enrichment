import React, { Component } from 'react';

export default class NewStudent extends Component {
  constructor() {
    super()
    this.state = {}
    // state from store? - needs its own state since it's a form
    // bind functions here
  }

  // componentDidMount() {
  // }

// any necessary functions here

  render() {
    return (
      <div>
        <form >
          <label>Student Name</label>
          <input type='text'></input>
          <label>Student Name</label>
          <input type='text'></input>
          {/*form that takes name & campus then Re-renders Students page */}
        </form>
      </div>
    )
  }
}
{/*onSubmit={/*enter function to dispatch action that adds student*/}
