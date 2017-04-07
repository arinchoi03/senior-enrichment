const campusRouter = require('express').Router()
const db = require('../../db/models')
const Campus = db.Campus;

campusRouter.get('/', function(req, res, next) {
  Campus.findAll()
  .then((allCampuses) => {
    console.log('allCampuses in campus Route', allCampuses)
    res.json(allCampuses)
  })
  .catch(next);
})

campusRouter.get('/:campusId', function(req, res, next) {
  if (typeof (+req.params.id) !== 'number') {
    res.status(404).send('Invalid Campus Id entered!')
  } else {
    Campus.findById(req.params.campusId)
    .then(oneCampus => {
      if (!oneCampus) {
        res.status(404).send(`No campus with id ${req.params.campusId} exists!`)
      } else{
        res.status(200).send(oneCampus)
      }
    })
    .catch(next)
  }
})

campusRouter.post(':/campusId', function(req, res, next) {
  Campus.create(req.body)
  .then(newCampus => res.status(200).send(newCampus))
  .catch(next)
})

campusRouter.put(':/campusId', function(req, res, next) {
  Campus.update(req.body)
  .then(updatedCampus => res.status(201).send(updatedCampus))
  .catch(next)
})

campusRouter.delete(':/campusId', function(req, res, next) {
  Campus.destroy({
    where: {
      id: req.params.campusId
    }
  })
  .then(() => res.send('Campus has been deleted'))
  .catch(next)
})

module.exports = campusRouter;
