import axios from 'axios';
import { browserHistory } from 'react-router';

//\//\//\//\//\ ACTION CREATORS //\//\//\//\//\
export const addCampus = function(campus) {
  return {
    type: 'ADD_CAMPUS',
    campus: campus
  }
}

export const removeCampus = function(campuses) {
  return {
    type: 'REMOVE_CAMPUS',
    campuses: campuses
  }
}

export const editCampus = function(campus) {
  return {
    type: 'EDIT_CAMPUS',
    campus: campus
  }
}

export const getCampuses = function(campuses) {
  return {
    type: 'GET_CAMPUSES',
    campuses: campuses
  }
}

export const selectCampus = function(campus) {
  return {
    type: 'SELECT_CAMPUS',
    campus: campus
  }
}

//\//\//\//\//\ DISPATCHERS //\//\//\//\//\

export const getCampusById = function(campusId) {
  return function(dispatch) {
    return axios.get(`/api/campuses/${campusId}`)
      .then(res => dispatch(selectCampus(res.data)))
  }
}

// post (adds) new campus
// second parameter after the route is the payload (req.body)
export const addACampus = function(campus) {
  return function(dispatch) {
    return axios.post(`/api/campuses`, campus)
      .then((res) => {
        dispatch(addCampus(res.data))
        browserHistory.push(`/campuses`)
      })
  }
}

export const deleteACampus = function(campus) {
  return function(dispatch) {
    return axios.delete(`/api/campuses/${campus.id}`)
      .then((res) => {
        dispatch(removeCampus(res.data)) //receives array of new campuses
      })
  }
}

// when editing a campus, takes the id of the student clicked on (from Campuses comp) thru routeParams
// used to navigate ot the correct api route below
export const editACampus = function(campus, id) {
  return function(dispatch) {
    return axios.put(`/api/campuses/${id}`, campus)
      .then(res => {
        dispatch(editCampus(campus))
        browserHistory.go('/campuses')
      })
  }
}

// PROBLEM: after edit/delete/add, it takes an extra re-load to update correctly...
