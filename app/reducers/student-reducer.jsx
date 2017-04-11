import { GET_STUDENTS, ADD_STUDENT, REMOVE_STUDENT, EDIT_STUDENT, SELECT_STUDENT} from '../action-creators/students'

const studentInitialState = {
  students: [],
  selectedStudent: {}
}

export default function ( state = studentInitialState, action) {

  let newState = Object.assign({}, state)

  switch (action.type) {
    case GET_STUDENTS:
      newState.students = action.students
      break;
    case ADD_STUDENT:
      newState.students = [...state.students, action.student]
      break;
    case REMOVE_STUDENT:
      //puts new state's student array as array filtering out student that doesn't match
      newState.students = state.students.filter((student) => (student.id !== action.student.id))
      break;
    case EDIT_STUDENT:
      newState.selectedStudent = action.student
      break;
    case SELECT_STUDENT:
      newState.selectedStudent = action.student;
      break;
    default:
      return state;
  }
  return newState;
}
