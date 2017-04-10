import axios from 'axios';

export const GET_STUDENTS = 'GET_STUDENTS'
export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const SELECT_STUDENT = 'SELECT_STUDENT'

export const addStudent = function(student) {
  return {
    type: ADD_STUDENT,
    student: student
  }
}

export const removeStudent = function(student) {
  return {
    type: REMOVE_STUDENT,
    student: null //? removed student, so set to null?
  }
}

export const editStudent = function(student) {
  return {
    type: EDIT_STUDENT,
    student: student
  }
}

export const getStudents = function(students) {
  return {
    type: GET_STUDENTS,
    students: students
  }
}

export const selectStudent = function(student) {
  return {
    type: SELECT_STUDENT,
    student: student
  }
}

export const getStudentById = function(studentId) {
  return function(dispatch) {
    return axios.get(`/api/students/${studentId}`)
      .then(res => dispatch(selectStudent(res.data)))
  }
}
