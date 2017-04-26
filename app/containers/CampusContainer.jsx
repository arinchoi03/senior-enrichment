import React, { Component } from 'react';
import { connect } from 'react-redux'
// import Immutable from 'immutable'

import Campus from '../components/Campus'

const mapStateToProps = (state) => {
  const filteredStudents = state.get('studentData').get('students').filter((student) => {
    return student.campusId === state.getIn(['campusData', 'selectedCampus']).toJS().id
  })
  //returns array of students in campus: // console.log('look at the filtered students in campuscontainer', filteredStudents)

  return {
    students: filteredStudents,
    selectedCampus: state.get('campusData').get('selectedCampus').toJS(),
    campuses: state.get('campusData').get('campuses').toJS(),
    selectedStudent: state.get('studentData').get('selectedStudent').toJS()
  }
}


const CampusContainer = connect(
  mapStateToProps
  )(Campus);

export default CampusContainer
