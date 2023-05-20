const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/:userId/:itemId', basketController.addItem)
router.get('/:userId', basketController.getItems)
router.delete('/:userId/:itemId', basketController.delItem)

module.exports = router