import axios from 'axios';
import {browserHistory} from 'react-router';

//\//\//\//\//\ ACTION CREATORS //\//\//\//\//\

export const addStudent = function(student) {
  return {
    type: 'ADD_STUDENT',
    student: student
  }
}

export const removeStudent = function(students) {
  return {
    type: 'REMOVE_STUDENT',
    students: students
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

// post (adds) new student
// second parameter after the route is the payload (req.body)
export const addAStudent = function(student) {
  return function(dispatch) {
    return axios.post(`/api/students/`, student)
      .then(res => {
        dispatch(addStudent(res.data))
        browserHistory.push('/students')
      })
  }
}

export const deleteAStudent = function(studentId) {
  return function(dispatch) {
    return axios.delete(`/api/students/${studentId}`)
      .then(res => {
        dispatch(removeStudent(res.data)) //receives array of students
      })
  }
}

// when editing the student, takes the id of the selectedStudent clicked on (from Students comp)
// used to navigate ot the correct api route below
export const editAStudent = function(student, id) {
  return function(dispatch) {
    return axios.put(`/api/students/${id}`, student)
      .then(res => {
        dispatch(editStudent(res.data))
        browserHistory.push('/students')
      })
  }
}

//always needs an extra refresh before it all updates correctly
// why is this?!?!?
