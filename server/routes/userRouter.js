const router = require('express').Router()
const UserWorker = require('../workers/userWorker')

router.post('/add', UserWorker.addUser)
router.put('/update', UserWorker.updateUser)
router.post('/user/get', UserWorker.getUser)
router.post('/getList', UserWorker.getListUser)

