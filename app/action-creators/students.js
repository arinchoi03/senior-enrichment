import axios from 'axios';

export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';

export const addStudent = function(student) {
  return {
    type: ADD_STUDENT,
    campus: student
  }
}

export const removeStudent = function(student) {
  return {
    type: REMOVE_STUDENT,
    campus: null //? removed student, so set to null?
  }
}

export const editStudent = function(student) {
  return {
    type: EDIT_STUDENT,
    campus: student
  }
}
