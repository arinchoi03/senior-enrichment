import React, { Component } from 'react';
import { connect } from 'react-redux'

import Campus from '../components/Campus'

const mapStateToProps = (state) => {

  const filteredStudents = state.studentData.students.filter((student) => student.campusId === state.campusData.selectedCampus.id)
  //returns array of students in campus: // console.log('look at the filtered students in campuscontainer', filteredStudents)

  return {
    students: filteredStudents,
    selectedCampus: state.campusData.selectedCampus,
    campuses: state.campusData.campuses
  }
}


const CampusContainer = connect(
  mapStateToProps
  )(Campus);

export default CampusContainer
