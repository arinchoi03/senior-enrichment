import { combineReducers } from 'redux'

import campusReducer from './campus-reducer'
import studentReducer from './student-reducer'

// intial state moved to separate reducer files?

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default combineReducers({campusData: campusReducer, studentData: studentReducer});
