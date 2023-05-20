const Router = require('express')
const router = new Router()
const authRouter = require('../routes/authRouter')
const itemRouter = require('../routes/itemRouter')
const brandRouter = require('../routes/brandRouter')
const typeRouter = require('../routes/typeRouter')
const basketRouter = require('../routes/basketRouter')

router.use('/auth', authRouter)
router.use('/item', itemRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)
router.use('/basket', basketRouter)


module.exports = router