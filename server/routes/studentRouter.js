const studentRouter = require('express').Router()
const db = require('../../db/models')
const Student = db.Student;
const Campus = db.Campus;

studentRouter.get('/', function(req, res, next) {
  Student.findAll()
  .then((allStudents) => res.send(allStudents))
  .catch(next);
})


studentRouter.post('/', function(req, res, next) {
  Student.create(req.body)
  .then(newStudent => res.status(200).send(newStudent))
  .catch(next)
})


studentRouter.get('/:studentId', function(req, res, next) {
  if (typeof (+req.params.studentId) !== 'number') {
    res.status(404).send('Invalid student Id entered!')
  } else {
    Student.findById(req.params.studentId)
    .then(oneStudent => {
      if (!oneStudent) {
        res.status(404).send(`No student with id ${req.params.studentId} exists!`)
      } else {
        res.status(200).send(oneStudent)
      }
    })
    .catch(next)
  }
})

studentRouter.put('/:studentId', function(req, res, next) {
  Student.update(req.body)
  .then(updatedStudent => res.status(201).send(updatedStudent))
  .catch(next)
})

studentRouter.delete('/:studentId', function(req, res, next) {
  Student.destroy({
    where: {
      id: req.params.studentId
    }
  })
  .then(() => {
    res.redirect('/')
  })
  .catch(next)
})


module.exports = studentRouter;
