'use strict'
import Immutable from 'immutable'

//\//\//\//\//\ STUDENT INITIAL STATE //\//\//\//\//\

const studentInitialState = Immutable.fromJS({
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

  switch (action.type) {
    case GET_STUDENTS:
      // retreives all students from db & sets it to store.state's students
      return state.set('students', action.students)
    case ADD_STUDENT:
      // concats new student to the end of students array
      state.update('students', students => students.push(action.student))
      break;
    case REMOVE_STUDENT:
      //puts new state's student array as array filtering out student that doesn't match
      return state.set('students', action.students)
    case EDIT_STUDENT:
      // update the currently selected student
      return state.set('selectedStudent', action.student)
    case SELECT_STUDENT:
      // sets selectedStudent on state
      return state.set('selectedStudent', action.student)
    default:
      return state;
  }
  return state
}
