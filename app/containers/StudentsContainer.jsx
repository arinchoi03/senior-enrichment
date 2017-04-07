import React, { Component } from 'react';
import { connect } from 'react-redux'

import Students from '../components/Students'

const mapStateToProps = (state) => {

  //to access prop in current state - state.campusData.campuses
  return {
    students: state.studentData.students,
    selectedCampus: state.studentData.selectedStudent
  }
}

// const mapStateToProps = (dispatch) => {

// }

const StudentsContainer = connect(
  mapStateToProps
  )(Students);

export default StudentsContainer
