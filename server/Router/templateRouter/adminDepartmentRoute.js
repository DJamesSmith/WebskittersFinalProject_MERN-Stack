const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const adminController = require('../../Controller/adminController/adminDepartmentController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// ---------------- Multer ----------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./server/public/imageUploads/departmentUploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + 'department' + path.extname(file.originalname))
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

// GET: All Departments
router.get('/allDepartments', adminController.allDepartments)

// POST
router.get('/addDepartment', adminController.addDepartment)
router.post('/createDepartment', upload.single('image'), adminController.createDepartment)

// PUT
router.get('/editDepartment/:id', adminController.singleDepartment)
router.post('/updateDepartment/:id', upload.single('image'), adminController.updateDepartment)

// DELETE
router.get('/deleteDepartment/:id', adminController.deleteDepartment)

module.exports = router