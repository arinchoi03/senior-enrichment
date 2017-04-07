const studentRouter = require('express').Router()
const db = require('../../db/models')
const Student = db.Student;

studentRouter.get('/', function(req, res, next) {
  Student.findAll()
  .then((allStudents) => res.send(allStudents))
  .catch(next);
})

studentRouter.get('/:campusId', function(req, res, next) {
  if (typeof (+req.params.id) !== 'number') {
    res.status(404).send('Invalid student Id entered!')
  } else {
    Student.findById(req.params.studentId)
    .then(oneStudent => {
      if (!oneStudent) {
        res.status(404).send(`No student with id ${req.params.studentId} exists!`)
      } else{
        res.status(200).send(oneStudent)
      }
    })
    .catch(next)
  }
})

studentRouter.post(':/campusId', function(req, res, next) {
  Student.create(req.body)
  .then(newStudent => res.status(200).send(newStudent))
  .catch(next)
})

studentRouter.put(':/campusId', function(req, res, next) {
  Student.update(req.body)
  .then(updatedStudent => res.status(201).send(updatedStudent))
  .catch(next)
})

studentRouter.delete(':/campusId', function(req, res, next) {
  Student.destroy({
    where: {
      id: req.params.campusId
    }
  })
  .then(() => res.send('Student has been deleted'))
  .catch(next)
})


module.exports = studentRouter;
