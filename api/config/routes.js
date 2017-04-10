var express                           = require('express'),
    router                            = express.Router(),
    {index, create, update, destroy}  = require('../controllers/users')

router.route('/')
  .get(index)
  .post(create)

router.route('/:id')
  .patch(update)
  .delete(destroy)

module.exports = router
