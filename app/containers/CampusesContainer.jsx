// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Campuses from '../components/Campuses'
import { selectCampus } from '../action-creators/campuses'

const mapStateToProps = (state) => {

  //to access prop in current state - state.campusData.campuses
  return {
    campuses: state.campusData.campuses,
    selectedCampus: state.campusData.selectedCampus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCampus(campus) {
      dispatch(selectCampus(campus))
    }
  }
}

const CampusesContainer = connect(
  mapStateToProps, mapDispatchToProps
  )(Campuses);

export default CampusesContainer;
        // {/*each campus seen in separate divs...also clickable to links Campus
        // pass down props to campus (students for that selected campus)*/}
