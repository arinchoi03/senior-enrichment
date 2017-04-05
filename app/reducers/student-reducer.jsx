import { ADD_STUDENT, REMOVE_STUDENT, EDIT_STUDENT } from '../action-creators/students'

const studentInitialState = {
  students: [],
  selectedStudent: {}
}

export default function ( state = studentInitialState, action) {

  let newState = Object.assign({}, state)

  switch (action.type) {
    case ADD_STUDENT:
      newState.selectedStudent = action.student;
      break;
    case REMOVE_STUDENT:
      newState.selectedStudent = null;
      break;
    case EDIT_STUDENT:
      newState.selectedStudent = action.student
      break;
    default:
      return state;
  }
  return newState;
}