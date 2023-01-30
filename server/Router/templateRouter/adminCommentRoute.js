const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const adminController = require('../../Controller/adminController/adminCommentController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// GET: All Comments
router.get('/allComments', adminController.allComments)

// POST
router.get('/addComment', adminController.addComment)
router.post('/createComment', adminController.createComment)

// PUT
router.get('/editComment/:id', adminController.singleComment)
router.post('/updateComment/:id', adminController.updateComment)

// DELETE
router.get('/deleteComment/:id', adminController.deleteComment)

module.exports = router