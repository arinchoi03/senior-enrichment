const studentRouter = require('express').Router()
const db = require('../../db/models')
const Student = db.Student;
const Campus = db.Campus;

////////  ROUTES TO '/'

// retreives all students from db
studentRouter.get('/', function(req, res, next) {
  Student.findAll()
  .then((allStudents) => res.send(allStudents))
  .catch(next);
})

// creates a new student instance
studentRouter.post('/', function(req, res, next) {
  Student.create(req.body)
  .then(newStudent => res.status(200).send(newStudent))
  .catch(next)
})


////////  ROUTES TO '/:studentId'

// req params refactor - checks if id is valid & student exists
studentRouter.param('studentId', function(req, res, next, studentId) {
  if (typeof (+req.params.studentId) !== 'number') {
    res.status(404).send('Invalid student Id entered!')
  } else {
    Student.findById(req.params.studentId)
    .then(oneStudent => {
      if (!oneStudent) {
        res.status(404).send(`No student with id ${req.params.studentId} exists!`)
      } else {
        req.studentById = oneStudent;
        next();
      }
    })
    .catch(next)
  }
})

// gets one student
studentRouter.get('/:studentId', function(req, res, next) {
  res.status(200).send(req.studentById)
})

// edits one student
studentRouter.put('/:studentId', function(req, res, next) {
  req.studentById.update(req.body)
  .then(updatedStudent => res.status(201).send(updatedStudent))
  .catch(next)
})

// deletes one student
studentRouter.delete('/:studentId', function(req, res, next) {
  req.studentById.destroy()
    .then(() => {
      return Student.findAll()
    })
    .then((students => res.send(students)))
    .catch(next)
})


module.exports = studentRouter;
