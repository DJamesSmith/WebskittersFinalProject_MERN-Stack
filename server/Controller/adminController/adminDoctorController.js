const DoctorModel=require('../../Model/Admin/Doctor')

exports.index = ((req, res) => {
    res.render('index', {
        title: 'AdminLTE | Dashboard',
        dashboardtitle: 'Dashboard'
    })
})

exports.contact = ((req, res) => {
    res.render('contact', {
        title: 'AdminLTE | Contact',
        dashboardtitle: 'Contacts Page'
    })
})

// // GET - All Doctors
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

// // POST - Add Doctor
exports.createDoctor = ((req, res) => {
    //console.log(req.body)
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
            res.redirect('/admin/allDoctors')
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not send Empty data.')
            res.redirect('/admin/addDoctor')
        })
})

// // GET - Single Doctor for "Edit Doctor Page"
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

// // PUT - Edit Doctor
exports.updateDoctor = ((req, res) => {
    DoctorModel.findByIdAndUpdate(req.params.id, {
        docImage: req.file.filename,
        docName:req.body.docName,
        deptName:req.body.deptName,
        docDescription: req.body.docDescription,
        docQualificationName: req.body.docQualificationName,
        docYear: req.body.docYear,
        docQualificationDescription: req.body.docQualificationDescription,
        docSkills: req.body.docSkills,
        docExpertise: req.body.docExpertise
    }, (error, result) => {
        if (!error) {
            console.log(result, "Doctor data saved successfully.")
            req.flash('message', 'Doctor edited successfully')
            res.redirect('/admin/allDoctors')
        } else {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not save Empty data.')
            res.redirect('/admin/editDoctor')
        }
    })
})

// // DELETE - Doctor
exports.deleteDoctor = ((req, res, next) => {
    const doctorID = req.params.id

    DoctorModel.deleteOne({ _id: doctorID })
        .then(result => {
            console.log(result, "Doctor data deleted successfully.")
            req.flash('message', 'Deleted Doctor data successfully')
            res.redirect('/admin/allDoctors')
        })
        .catch(err => {
            console.log(err, "No Data Deleted.")
            req.flash('error', 'Unable to delete doctor data.')
            res.redirect('/admin/allDoctors')
        })
})