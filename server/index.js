const router = require('express').Router()

const userRouter = require('./routes/userRouter')

router.use('/server/user/', userRouter)

