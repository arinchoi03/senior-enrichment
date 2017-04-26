//\//\//\//\//\ CAMPUS INITIAL STATE //\//\//\//\//\

const campusInitialState = {
  campuses: [],
  selectedCampus: {}
}

//\//\//\//\//\ CAMPUS CONSTANTS //\//\//\//\//\

const GET_CAMPUSES = 'GET_CAMPUSES'
const ADD_CAMPUS = 'ADD_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const SELECT_CAMPUS = 'SELECT_CAMPUS';


//\//\//\//\//\ CAMPUS REDUCERS //\//\//\//\//\

export default function ( state = campusInitialState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_CAMPUSES:
      // retrieves all campuses from db & sets it to store.state's campuses
      newState.campuses = action.campuses
      break;
    case ADD_CAMPUS:
      // concats new campus to the end of the campuses array
      newState.campuses = [...state.campuses, action.campus]
    case REMOVE_CAMPUS:
      // runs through array of campuses & filters out specific campus w/ id
      newState.campuses = state.campuses.filter((campus) => campus.id !== action.campus)
      break;
    case EDIT_CAMPUS:
      // updates the current selectedCampus
      newState.selectedCampus = action.campus
      break;
    case SELECT_CAMPUS:
      // sets selectedCampus on state
      newState.selectedCampus = action.campus;
      break;
    default:
      return state
  }
  return newState;
}
