import React, { Component } from 'react';
import { connect } from 'react-redux'
// import Immutable from 'immutable'

import Campus from '../components/Campus'

const mapStateToProps = (state) => {
  const filteredStudents = state.toJS().studentData.students.filter((student) => {
    return student.campusId === state.toJS().campusData.selectedCampus.id
  })
  //returns array of students in campus: // console.log('look at the filtered students in campuscontainer', filteredStudents)

  return {
    students: filteredStudents,
    selectedCampus: state.toJS().campusData.selectedCampus,
    campuses: state.toJS().campusData.campuses,
    selectedStudent: state.toJS().studentData.selectedStudent
  }
}


const CampusContainer = connect(
  mapStateToProps
  )(Campus);

export default CampusContainer
