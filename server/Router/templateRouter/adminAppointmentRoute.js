const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const adminController = require('../../Controller/adminController/adminAppointmentController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// GET: All Appointments
router.get('/allAppointments', adminController.allAppointments)

// POST
router.get('/addAppointment', adminController.addAppointment)
router.post('/createAppointment', adminController.createAppointment)

// PUT
router.get('/editAppointment/:id', adminController.singleAppointment)
router.post('/updateAppointment/:id', adminController.updateAppointment)

// DELETE
router.get('/deleteAppointment/:id', adminController.deleteAppointment)

module.exports = router