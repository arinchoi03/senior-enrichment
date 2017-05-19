import React, { Component } from 'react';
import { connect } from 'react-redux'

import Students from '../components/Students'
import { selectStudent, deleteAStudent } from '../action-creators/students'
import { getCampusById } from '../action-creators/campuses'

const mapStateToProps = (state) => {

  //to access prop in current state - state.campusData.campuses
  return {
    students: state.get('studentData').get('students'),
    selectedStudent: state.get('studentData').get('selectedStudent'),
    campuses: state.get('campusData').get('campuses')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStudent(student) {
      dispatch(selectStudent(student))
    },
    setCampus(campusId) {
      dispatch(getCampusById(campusId))
    },
    removeStudent(studentId) {
      dispatch(deleteAStudent(studentId))
    } //addStudent here
  }
}

const StudentsContainer = connect(
  mapStateToProps, mapDispatchToProps
  )(Students);

export default StudentsContainer
