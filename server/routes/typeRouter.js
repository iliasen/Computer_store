const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')


router.post('/', typeController.create)
router.get('/', typeController.getType)
router.delete('/:name', typeController.del)
module.exports = router