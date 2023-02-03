const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const adminController = require('../../Controller/adminController/adminBlogController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// ---------------- Multer ----------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./server/public/imageUploads/blogUploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + 'blog' + path.extname(file.originalname))
    }
})

const maxSize = 2 * 1024 * 1024 // for 1MB

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"))
        }
    },
    limits: { fileSize: maxSize }
})

// ---------------- Multer ----------------

// GET: All Blogs
router.get('/allBlogs', adminController.allBlogs)

// POST
router.get('/addBlog', adminController.addBlog)
router.post('/createBlog', upload.single('blogImage'), adminController.createBlog)

// PUT
router.get('/editBlog/:id', adminController.singleBlog)
router.post('/updateBlog/:id', upload.single('blogImage'), adminController.updateBlog)

// DELETE
router.get('/deleteBlog/:id', adminController.deleteBlog)

// --------------------------------- Comment Section ---------------------------------
// GET Comments
router.get('/allComments/:id', adminController.allComments)          // Add using Blog's ID

// // POST
router.get('/addComment/:id', adminController.addComment)                       
router.post('/createComment/:id', adminController.createComment)

// // PUT
// router.get('/editComment/:id', adminController.singleComment)
// router.post('/updateComment/:id', adminController.updateComment)

// // DELETE
// router.get('/deleteComment/:id', adminController.deleteComment)

// --------------------------------- Comment Section ---------------------------------

module.exports = router