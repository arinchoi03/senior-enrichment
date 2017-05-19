import React from 'react';
import { connect } from 'react-redux'

import Student from '../components/Student'
import { selectStudent, deleteAStudent } from '../action-creators/students'
import { getCampusById } from '../action-creators/campuses'

const mapStateToProps = (state) => {

  return {
    selectedStudent: state.get('studentData').get('selectedStudent'),
    campuses: state.get('campusData').get('campuses'),
    students: state.get('studentData').get('students'),
    selectedCampus: state.get('campusData').get('selectedCampus')
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
