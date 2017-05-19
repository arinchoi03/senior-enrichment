// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Campuses from '../components/Campuses'
import { selectCampus, deleteACampus } from '../action-creators/campuses'

const mapStateToProps = (state) => {
  return {
    campuses: state.getIn(['campusData', 'campuses']),
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
