import { ADD_CAMPUS, REMOVE_CAMPUS, EDIT_CAMPUS } from '../action-creators/campuses'

const campusInitialState = {
  campuses: [],
  selectedCampus: {}
}

export default function ( state = campusInitialState, action) {

  let newState = Object.assign({}, state)

  switch (action.type) {
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
}
