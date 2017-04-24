'use strict';
const { Map } = require('immutable');

//\//\//\//\//\ STUDENT INITIAL STATE //\//\//\//\//\

const studentInitialState = Map({
  students: [],
  selectedStudent: {}
})

//\//\//\//\//\ STUDENT CONSTANTS //\//\//\//\//\

const GET_STUDENTS = 'GET_STUDENTS'
const ADD_STUDENT = 'ADD_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const SELECT_STUDENT = 'SELECT_STUDENT'


//\//\//\//\//\ STUDENT REDUCERS //\//\//\//\//\

export default function ( state = studentInitialState, action) {

  let newState = Object.assign({}, state)

  switch (action.type) {
    case GET_STUDENTS:
      // retreives all students from db & sets it to store.state's students
      newState.students = action.students
      break;
    case ADD_STUDENT:
      // concats new student to the end of students array
      newState.students = [...state.students, action.student]
    case REMOVE_STUDENT:
      //puts new state's student array as array filtering out student that doesn't match
      newState.students = state.students.filter((student) => (student.id !== action.student.id))
      break;
    case EDIT_STUDENT:
      // update the currently selected student
      newState.selectedStudent = action.student
      break;
    case SELECT_STUDENT:
      // sets selectedStudent on state
      newState.selectedStudent = action.student;
      break;
    default:
      return state;
  }
  return newState;
}
