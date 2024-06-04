 const Router = require('express')
 const router = new Router()
 const userRouter = require('./userRouter')
 const companyRouter = require('./companyRouter')
 const workerRouter = require('./workerRouter')
 const qe_tabRouter=require('./qe_tabRouter')
 const test_tabRouter = require('./test_tabRouter')
//cоздание путей для сайта
 router.use('/user', userRouter)
 router.use('/qe', qe_tabRouter)
 router.use('/test', test_tabRouter)
 router.use('/company', companyRouter)
 router.use('/worker', workerRouter)

 module.exports = router