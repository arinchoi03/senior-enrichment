'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('student', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
})

// name could probably be first & last names
