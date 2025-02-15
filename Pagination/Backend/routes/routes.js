const express = require('express')
const router = express.Router()
const Controller = require('../contollers/contollers')

router.post('/createPost', Controller.CreatePost)

router.get('/getPost', Controller.getPost)


module.exports = router