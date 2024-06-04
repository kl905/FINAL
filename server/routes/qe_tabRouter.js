const Router = require('express')
const router = new Router()
const qe_tabRouter = require('../controllers/qe_tabController')

router.post('/',qe_tabRouter.create)
router.get('/',qe_tabRouter.getAll)


module.exports = router