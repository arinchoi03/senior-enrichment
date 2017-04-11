// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Campuses from '../components/Campuses'
import { selectCampus, deleteACampus } from '../action-creators/campuses'

const mapStateToProps = (state) => {

  //to access prop in current state - state.campusData.campuses
  return {
    campuses: state.campusData.campuses,
    selectedCampus: state.campusData.selectedCampus,
    students: state.studentData.students,
    selectedStudent: state.studentData.selectedStudent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCampus(campus) {
      dispatch(selectCampus(campus))
    },
    deleteCampus(campus){
      dispatch(deleteACampus(campus))
    }
  }
}

const CampusesContainer = connect(
  mapStateToProps, mapDispatchToProps
  )(Campuses);

export default CampusesContainer;
        // {/*each campus seen in separate divs...also clickable to links Campus
        // pass down props to campus (students for that selected campus)*/}
