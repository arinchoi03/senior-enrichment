import axios from 'axios';
import {browserHistory} from 'react-router';

//\//\//\//\//\ ACTION CREATORS //\//\//\//\//\

export const addStudent = function(student) {
  return {
    type: 'ADD_STUDENT',
    student: student
  }
}

export const removeStudent = function(student) {
  return {
    type: 'REMOVE_STUDENT',
    student: student
  }
}

export const editStudent = function(student) {
  return {
    type: 'EDIT_STUDENT',
    student: student
  }
}

export const getStudents = function(students) {
  return {
    type: 'GET_STUDENTS',
    students: students
  }
}

export const selectStudent = function(student) {
  return {
    type: 'SELECT_STUDENT',
    student: student
  }
}


//\//\//\//\//\ DISPATCHERS //\//\//\//\//\

export const getStudentById = function(studentId) {
  return function(dispatch) {
    return axios.get(`/api/students/${studentId}`)
      .then(res => dispatch(selectStudent(res.data)))
  }
}


export const addAStudent = function(student) {
  return function(dispatch) {
    return axios.post(`/api/students/`, student)
      .then(res => {
        dispatch(addStudent(student))
        browserHistory.push(`/students`)
      })
  }
}

export const deleteAStudent = function(studentId) {
  return function(dispatch) {
    return axios.delete(`/api/students/${studentId}`)
      .then(res => {
        dispatch(removeStudent(studentId))
        browserHistory.push('/students')
        // trying to redirect...not really working?
      })
  }
}
