import axios from 'axios';

export const ADD_CAMPUS = 'ADD_CAMPUS';
export const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
export const EDIT_CAMPUS = 'EDIT_CAMPUS';

export const addCampus = function(campus) {
  return {
    type: ADD_CAMPUS,
    campus: campus
  }
}

export const removeCampus = function(campus) {
  return {
    type: REMOVE_CAMPUS,
    campus: null //? removed campus, so set to null?
  }
}

export const editCampus = function(campus) {
  return {
    type: EDIT_CAMPUS,
    campus: campus
  }
}
