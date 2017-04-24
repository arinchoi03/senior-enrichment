'use strict'
import Immutable from 'immutable'
//\//\//\//\//\ CAMPUS INITIAL STATE //\//\//\//\//\

const campusInitialState = Immutable.fromJS({
  campuses: [],
  selectedCampus: {}
})

//\//\//\//\//\ CAMPUS CONSTANTS //\//\//\//\//\

const GET_CAMPUSES = 'GET_CAMPUSES'
const ADD_CAMPUS = 'ADD_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const SELECT_CAMPUS = 'SELECT_CAMPUS';


//\//\//\//\//\ CAMPUS REDUCERS //\//\//\//\//\

export default function ( state = campusInitialState, action) {

  switch (action.type) {
    case GET_CAMPUSES:
      // retrieves all campuses from db & sets it to store.state's campuses
      return state.set('campuses', action.campuses)
    case ADD_CAMPUS:
      // concats new campus to the end of the campuses array
      // state.toJS().campuses.push(action.campus)
      state.update('campuses', campuses => campuses.push(action.campus))
      break;
    case REMOVE_CAMPUS:
      // runs through array of campuses & filters out specific campus w/ id
      return state.set('campuses', action.campuses)
    case EDIT_CAMPUS:
      // updates the current selectedCampus
      return state.set('selectedCampus', action.campus)
    case SELECT_CAMPUS:
      // sets selectedCampus on state
      return state.set('selectedCampus', action.campus)
    default:
      return state
  }
  return state
}
