import axios from 'axios';
import { browserHistory } from 'react-router';

export const addCampus = function(campus) {
  return {
    type: 'ADD_CAMPUS',
    campus: campus
  }
}

export const removeCampus = function(campus) {
  return {
    type: 'REMOVE_CAMPUS',
    campus: campus
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

export const getCampusById = function(campusId) {
  return function(dispatch) {
    return axios.get(`/api/campuses/${campusId}`)
      .then(res => dispatch(selectCampus(res.data)))
  }
}


export const addACampus = function(campus) {
  return function(dispatch) {
    return axios.post(`/api/campuses/`, campus)
      .then((res) => {
        dispatch(addCampus(campus))
        browserHistory.push(`/campuses`)
      })
  }
}

export const deleteACampus = function(campus) {
  return function(dispatch) {
    return axios.delete(`/api/campuses/${campus.id}`)
      .then((res) => {
        dispatch(removeCampus(campus))
        browserHistory.push('/campuses')
      })
  }
}
