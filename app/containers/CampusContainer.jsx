import React, { Component } from 'react';
import { connect } from 'react-redux'
// import Immutable from 'immutable'

import Campus from '../components/Campus'

const mapStateToProps = (state) => {
  const filteredStudents = state.get('studentData').get('students').filter((student) => {
    return student.campusId === state.get('campusData').get('selectedCampus').id
  })
  //returns array of students in campus: // console.log('look at the filtered students in campuscontainer', filteredStudents)

  return {
    students: filteredStudents,
    selectedCampus: state.get('campusData').get('selectedCampus'),
    campuses: state.get('campusData').get('campuses'),
    selectedStudent: state.get('studentData').get('selectedStudent')
  }
}


const CampusContainer = connect(
  mapStateToProps
  )(Campus);

export default CampusContainer
