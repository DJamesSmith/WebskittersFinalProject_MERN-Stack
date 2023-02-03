const AppointmentModel = require('../../Model/admin/Appointment')
const DoctorModel=require('../../Model/Admin/Doctor')
// const DepartmentModel=require('../../Model/Admin/Department')

// GET - All Appointments
exports.allAppointments = (req, res) => {
    AppointmentModel.find().populate("Department").populate("Doctor").exec((error, data) => {
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

exports.showAddDoctor = (req, res) => {
    res.render("Appointments/addDoctor", {
        title: "Add | Doctors"
    });
}

exports.AddDoctor = (req, res) => {
    const Doctor = new DoctorModel({
        docImage: req.file.filename,
        docName: req.body.docName,
        deptName: req.body.deptName,
        docDescription: req.body.docDescription,
        docQualificationName: req.body.docQualificationName,
        docYear: req.body.docYear,
        docQualificationDescription: req.body.docQualificationDescription,
        docSkills: req.body.docSkills,
        docExpertise: req.body.docExpertise
    })
    Doctor.save()
        .then(result => {
            console.log(result, "Doctor data created successfully.")
            req.flash('message', 'Added Doctor successfully')
            res.redirect('/admin/addDepartment')
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not send Empty data.')
            res.redirect('/admin/addDoctor')
        })
}
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

