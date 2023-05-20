const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const roleMiddleware = require("../middleware/roleMiddleware");

router.post('/', roleMiddleware(["ADMIN"]), brandController.create)
router.get('/', brandController.getBrand)
router.delete('/:name', brandController.del)

module.exports = router