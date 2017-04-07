// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Campuses from '../components/Campuses'


const mapStateToProps = (state) => {

  //to access prop in current state - state.campusData.campuses
  return {
    campuses: state.campusData.campuses,
    selectedCampus: state.campusData.selectedCampus
  }
}

// const mapStateToProps = (dispatch) => {

// }

const CampusesContainer = connect(
  mapStateToProps
  )(Campuses);

export default CampusesContainer;
        // {/*each campus seen in separate divs...also clickable to links Campus
        // pass down props to campus (students for that selected campus)*/}
