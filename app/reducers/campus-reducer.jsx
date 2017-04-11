const campusInitialState = {
  campuses: [],
  selectedCampus: {}
}

const GET_CAMPUSES = 'GET_CAMPUSES'
const ADD_CAMPUS = 'ADD_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const SELECT_CAMPUS = 'SELECT_CAMPUS';

export default function ( state = campusInitialState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_CAMPUSES:
      newState.campuses = action.campuses
      break;
    case ADD_CAMPUS:
      newState.campuses = [...state.campuses, action.campus]
      // do something with the selected campus in thunk??
      break;
    case REMOVE_CAMPUS:
      newState.campuses = state.campuses.filter((campus) => campus.id !== action.campus)
      break;
    case EDIT_CAMPUS:

      break;
    case SELECT_CAMPUS:
      newState.selectedCampus = action.campus;
      break;
    default:
      return state
  }
  return newState;
}

//DISPATCHER???
