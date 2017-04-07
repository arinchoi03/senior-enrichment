const campusInitialState = {
  campuses: [],
  selectedCampus: {}
}

const GET_CAMPUSES = 'GET_CAMPUSES'
const ADD_CAMPUS = 'ADD_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';

export default function ( state = campusInitialState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_CAMPUSES:
      newState.campuses = action.campuses
      break;
    case ADD_CAMPUS:
      newState.selectedCampus = action.campus;
      // do something with the selected campus in thunk??
      break;
    case REMOVE_CAMPUS:
      // how do I remove campus??
      break;
    case EDIT_CAMPUS:

      break;
    default:
      return state
  }
  return newState;
}

//DISPATCHER???
