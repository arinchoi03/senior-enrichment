import React, { Component } from 'react';
import { connect } from 'react-redux'

import store from '../store'
import { editAStudent } from '../action-creators/students'

class EditStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      campusId: ''
    }

    // binds these two functions to this particular state
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    store.dispatch(editAStudent(this.state, this.props.selectedStudent.id))
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
    students: state.studentData.students,
    campuses: state.campusData.campuses,
    selectedStudent: state.studentData.selectedStudent
  }
}

const EditStudentForm = connect(
  mapStateToProps)(EditStudent);

export default EditStudentForm;

// SAME as AddStudentForm - maybe there's a way to refactor?
// only difference is which function gets called at handlechange...
