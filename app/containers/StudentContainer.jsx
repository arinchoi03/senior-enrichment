import React from 'react';
import { connect } from 'react-redux'

import Student from '../components/Student'
import { selectStudent } from '../action-creators/students'
import { getCampusById } from '../action-creators/campuses'

const mapStateToProps = (state) => {
  // console.log('in Student Container, state studentData', state.studentData)
  // console.log('in Student Container - selectedStud', selectedStudent)

  return {
    selectedStudent: state.studentData.selectedStudent,
    campuses: state.campusData.campuses,
    students: state.studentData.students,
    selectedCampus: state.campusData.selectedCampus
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setStudent(student) {
      dispatch(selectStudent(student))
    },
    setCampus(campusId) {
      dispatch(getCampusById(campusId))
    }
  }
}


const StudentContainer = connect(
  mapStateToProps, mapDispatchToProps
  )(Student);

export default StudentContainer;
