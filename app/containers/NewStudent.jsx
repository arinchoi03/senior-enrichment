import React, { Component } from 'react';
import { connect } from 'react-redux'

import store from '../store'
import { addAStudent } from '../action-creators/students'

class NewStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      campusId: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    store.dispatch(addAStudent(this.state))
  }


  render() {
    const campuses = this.props.campuses
    return (<form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="studentName">Student name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="studentEmail">Student email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className= "form-group">
                <label>Select A Campus</label>
                <div>
                  <select id="campusId" onChange={this.handleChange}>
                    <option>    </option> {/*blank first choice*/}
                    {campuses && campuses.map((campus) => {
                      return (<option
                                key={campus.id}
                                value= {campus.id}>
                              {campus.name}
                            </option>)})}
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>)
  }
}
{/*onSubmit={/*enter function to dispatch action that adds student*/}


const mapStateToProps = (state) => {

  //to access prop in current state - state.campusData.campuses
  return {
    students: state.toJS().studentData.students,
    campuses: state.toJS().campusData.campuses
  }
}

// need to pull in some function to dispatch addStudent

const NewStudentForm = connect(
  mapStateToProps)(NewStudent);

export default NewStudentForm;
