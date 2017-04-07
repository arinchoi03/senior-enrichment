import axios from 'axios';

export const addCampus = function(campus) {
  return {
    type: 'ADD_CAMPUS',
    campus: campus
  }
}

export const removeCampus = function(campus) {
  return {
    type: 'REMOVE_CAMPUS',
    campus: null //? removed campus, so set to null?
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
