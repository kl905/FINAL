const Router = require('express')
const router = new Router()
const test_tabRouter = require('../controllers/test_tabController')

router.post('/create',test_tabRouter.create)
router.get('/',test_tabRouter.getAll)
router.get('/:id',test_tabRouter.getOne)


module.exports = router