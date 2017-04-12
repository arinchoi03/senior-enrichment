const campusRouter = require('express').Router()
const db = require('../../db/models')
const Campus = db.Campus;


////////  ROUTES TO '/'

// retreives all campuses from db
campusRouter.get('/', function(req, res, next) {
  Campus.findAll()
  .then((allCampuses) => {
    res.json(allCampuses)
  })
  .catch(next);
})

// creates a new campus instance
campusRouter.post('/', function(req, res, next) {
  Campus.create(req.body)
  .then(newCampus => res.status(200).send(newCampus))
  .catch(next)
})


////////  ROUTES TO '/:campusId'

// can refactor w app.param - for now stays this way
// gets one campus & responds with the campus
campusRouter.get('/:campusId', function(req, res, next) {
  if (typeof (+req.params.campusId) !== 'number') {
    res.status(404).send('Invalid Campus Id entered!')
  } else {
    Campus.findById(req.params.campusId)
    .then(oneCampus => {
      if (!oneCampus) {
        res.status(404).send(`No campus with id ${req.params.campusId} exists!`)
      } else {
        res.status(200).send(oneCampus)
      }
    })
    .catch(next)
  }
})

// edits one campus where id matches params.id
campusRouter.put('/:campusId', function(req, res, next) {
  Campus.update(req.body, {
      where: {id: req.params.campusId}
    }
  )
  .then(updatedCampus => res.status(201).send(updatedCampus))
  .catch(next)
})

// deletes one campus
campusRouter.delete('/:campusId', function(req, res, next) {
  Campus.destroy({
    where: {
      id: req.params.campusId
    }
  })
  .then(() => res.send('Campus has been deleted'))
  .catch(next)
})

module.exports = campusRouter;
