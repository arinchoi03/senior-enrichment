// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Campuses from '../components/Campuses'
import { selectCampus, deleteACampus } from '../action-creators/campuses'

const mapStateToProps = (state) => {
  console.log('state', state.toJS()) // looks correct, but empty
  //to access prop in current state - state.campusData.campuses
  return {
    campuses: state.toJS().campusData.campuses,
    selectedCampus: state.toJS().campusData.selectedCampus,
    students: state.toJS().studentData.students,
    selectedStudent: state.toJS().studentData.selectedStudent
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
