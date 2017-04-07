'use strict'

// downloads
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRedirect, browserHistory } from 'react-router'
import axios from 'axios'
var Promise = require('bluebird')

// store
import store from './store'

// Containers
import CampusesContainer from './containers/CampusesContainer'
import StudentsContainer from './containers/StudentsContainer'
import NewStudent from './containers/NewStudent'
import CampusContainer from './containers/CampusContainer'

// Components
// import Campus from './components/Campus'
import Student from './components/Student'
import Home from './components/Home'

// action creators to dispatch
import {getCampuses} from './action-creators/campuses'
import {getStudents} from './action-creators/students'

// on app enter, need to load all campuses/students
// axios request and store.dipatch to set current state
const onHomeEnter = () => {
  const allCampuses = axios.get('/api/campuses')
    .then(function(res) {
      // console.log('RES DATA IN MAIN', res.data)
      return res.data
    })
  const allStudents = axios.get('/api/students').then((res) => {
    return res.data
  })

  return Promise.all([allCampuses, allStudents])
  .spread(function(campuses, students){
    store.dispatch(getCampuses(campuses))
    store.dispatch(getStudents(students))
  })
  .catch(console.error)
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path= "/" component={Home} onEnter={onHomeEnter}>
        <Route path= "/campuses" component={CampusesContainer} />
        <Route path= "/campuses/:campusId" component= {CampusContainer} />
        <Route path= "/students" component={StudentsContainer} />
        <Route path = "/students/:studentId" component={Student} />
        <Route path = "/new-student" component={NewStudent} />
        <IndexRedirect to = "/campuses" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
