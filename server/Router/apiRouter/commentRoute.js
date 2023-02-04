const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const commentController = require('../../Controller/apiController/CommentController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// GET: All Comments
router.get('/allComments', commentController.allComments)

// POST
router.post('/createComment', commentController.createComment)

// PUT
router.get('/singleComment/:id', commentController.singleComment)
router.post('/updateComment/:id', commentController.updateComment)

// DELETE
router.get('/deleteComment/:id', commentController.deleteComment)

module.exports = router