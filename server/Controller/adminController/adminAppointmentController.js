const AppointmentModel = require('../../Model/admin/Appointment')

// GET - All Appointments
exports.allAppointments = (req, res) => {
    AppointmentModel.find((error, data) => {
        if (!error) {
            res.render('Appointments/allAppointments', {
                title: 'AdminLTE | All Appointments',
                dashboardtitle: 'Appointments Page',
                message: req.flash('message'),
                error: req.flash('error'),
                displaydata: data
            })
        }
    })
}

// GET - Add Appointment
exports.addAppointment = ((req, res) => {
    res.render('Appointments/addAppointment', {
        title: 'AdminLTE | Add New Appointment',
        dashboardtitle: 'Appointments Page',
        message: req.flash('message')
    })
})

// POST - Add Appointment
exports.createAppointment = ((req, res) => {
    // //console.log(req.body)
    // const Appointment = new AppointmentModel({
    //     appointmentName: req.body.appointmentName,
    //     description: req.body.description,
    //     image: req.file.filename
    // })
    // Appointment.save()
    //     .then(result => {
    //         console.log(result, "Appointment data created successfully.")
    //         req.flash('message', 'Added appointment successfully')
    //         res.redirect('/admin/appointment')
    //     })
    //     .catch(err => {
    //         console.log(err, "No Data Saved.")
    //         req.flash('error', 'You can not send Empty data.')
    //         res.redirect('/admin/addAppointment')
    //     })
})

// GET - Single Appointment for "Edit Appointment Page"
exports.singleAppointment = ((req, res) => {

    const appointmentID = req.params.id

    AppointmentModel.findById(appointmentID)
        .then(result => {
            res.render('Appointments/editAppointment', {
                title: 'AdminLTE | Edit Appointment',
                dashboardtitle: 'Appointments Page',
                message: req.flash('message'),
                data: result
            })
        })
})

// PUT - Edit Appointment
exports.updateAppointment = ((req, res) => {
    // AppointmentModel.findByIdAndUpdate(req.params.id, {
    //     appointmentName: req.body.appointmentName,
    //     description: req.body.description,
    //     image: req.file.filename
    // }, (error, result) => {
    //     if (!error) {
    //         console.log(result, "Appointment data saved successfully.")
    //         req.flash('message', 'Appointment edited successfully')
    //         res.redirect('/admin/appointment')
    //     } else {
    //         console.log(err, "No Data Saved.")
    //         req.flash('error', 'You can not save Empty data.')
    //         res.redirect('/admin/editAppointment')
    //     }
    // })
})

// DELETE - Appointment
exports.deleteAppointment = ((req, res, next) => {
    // const appointmentID = req.params.id

    // AppointmentModel.deleteOne({ _id: appointmentID })
    //     .then(result => {
    //         console.log(result, "Appointment data deleted successfully.")
    //         req.flash('message', 'Deleted Appointment data successfully')
    //         res.redirect('/admin/appointment')
    //     })
    //     .catch(err => {
    //         console.log(err, "No Data Deleted.")
    //         req.flash('error', 'Unable to delete appointment data.')
    //         res.redirect('/admin/appointment')
    //     })
})