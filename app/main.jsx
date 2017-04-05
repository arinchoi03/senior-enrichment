'use strict'

// downloads
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRedirect, browserHistory } from 'react-router'

// store
import store from './store'

// Containers
import Campuses from './containers/Campuses'
import Students from './containers/Students'
import NewStudent from './containers/NewStudent'

// Components
import Campus from './components/Campus'
import Student from './components/Student'
import Home from './components/Home'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path= "/" component={Home}>
        <Route path= "/campuses" component={Campuses} />
        <Route path= "/campuses/:campusId" component= {Campus} />
        <Route path= "/students" component={Students} />
        <Route path = "/students/:studentId" component={Student} />
        <Route path = "/new-student" component={NewStudent} />
        <IndexRedirect to = "/campuses" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)

//implement redirect later
