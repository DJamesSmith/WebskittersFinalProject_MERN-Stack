const DoctorModel = require('../../Model/admin/Doctor')

// GET - All Doctors
exports.allDoctors = (req, res) => {
    DoctorModel.find((error, data) => {
        if (!error) {
            res.render('Doctors/allDoctors', {
                title: 'AdminLTE | All Doctors',
                dashboardtitle: 'Doctors Page',
                message: req.flash('message'),
                error: req.flash('error'),
                displaydata: data
            })
        }
    })
}

// GET - Add Doctor
exports.addDoctor = ((req, res) => {
    res.render('Doctors/addDoctor', {
        title: 'AdminLTE | Add New Doctor',
        dashboardtitle: 'Doctors Page',
        message: req.flash('message')
    })
})

// POST - Add Doctor
exports.createDoctor = ((req, res) => {
    //console.log(req.body)
    const Doctor = new DoctorModel({
        doctorName: req.body.doctorName,
        description: req.body.description,
        image: req.file.filename
    })
    Doctor.save()
        .then(result => {
            console.log(result, "Doctor data created successfully.")
            req.flash('message', 'Added doctor successfully')
            res.redirect('/admin/doctor')
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not send Empty data.')
            res.redirect('/admin/addDoctor')
        })
})

// GET - Single Doctor for "Edit Doctor Page"
exports.singleDoctor = ((req, res) => {

    const doctorID = req.params.id

    DoctorModel.findById(doctorID)
        .then(result => {
            res.render('Doctors/editDoctor', {
                title: 'AdminLTE | Edit Doctor',
                dashboardtitle: 'Doctors Page',
                message: req.flash('message'),
                data: result
            })
        })
})

// PUT - Edit Doctor
exports.updateDoctor = ((req, res) => {
    DoctorModel.findByIdAndUpdate(req.params.id, {
        doctorName: req.body.doctorName,
        description: req.body.description,
        image: req.file.filename
    }, (error, result) => {
        if (!error) {
            console.log(result, "Doctor data saved successfully.")
            req.flash('message', 'Doctor edited successfully')
            res.redirect('/admin/doctor')
        } else {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not save Empty data.')
            res.redirect('/admin/editDoctor')
        }
    })
})

// DELETE - Doctor
exports.deleteDoctor = ((req, res, next) => {
    const doctorID = req.params.id

    DoctorModel.deleteOne({ _id: doctorID })
        .then(result => {
            console.log(result, "Doctor data deleted successfully.")
            req.flash('message', 'Deleted Doctor data successfully')
            res.redirect('/admin/doctor')
        })
        .catch(err => {
            console.log(err, "No Data Deleted.")
            req.flash('error', 'Unable to delete doctor data.')
            res.redirect('/admin/doctor')
        })
})