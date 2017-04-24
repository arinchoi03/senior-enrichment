import React from 'react';
import { connect } from 'react-redux'

import Student from '../components/Student'
import { selectStudent, deleteAStudent } from '../action-creators/students'
import { getCampusById } from '../action-creators/campuses'

const mapStateToProps = (state) => {

  return {
    selectedStudent: state.toJS().studentData.selectedStudent,
    campuses: state.toJS().campusData.campuses,
    students: state.toJS().studentData.students,
    selectedCampus: state.toJS().campusData.selectedCampus
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
    }
  }
}


const StudentContainer = connect(
  mapStateToProps, mapDispatchToProps
  )(Student);

export default StudentContainer;
