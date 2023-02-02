const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const adminController = require('../../Controller/adminController/adminDoctorController')

// router.use(bodyParser.json())
// router.use(bodyParser.urlencoded({ extended: true }))

// // ---------------- Multer ----------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./server/public/imageUploads/doctorUploads/")
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

// // ---------------- Multer ----------------

router.get('/', adminController.index)
router.get('/contact', adminController.contact)

// // GET: All Doctors
router.get('/allDoctors', adminController.allDoctors)

// // POST
router.get('/addDoctor', adminController.addDoctor)
router.post('/createDoctor', upload.single('docImage'), adminController.createDoctor)

// // PUT
router.get('/editDoctor/:id', adminController.singleDoctor)
router.post('/updateDoctor/:id', upload.single('docImage'), adminController.updateDoctor)

// // DELETE
router.get('/deleteDoctor/:id', adminController.deleteDoctor)

module.exports = router






