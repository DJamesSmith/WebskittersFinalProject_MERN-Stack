const departmentModel = require('../../Model/admin/Department');

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

// GET - All Department
exports.allDepartment = (req, res) => {
    departmentModel.find((error, data) => {
        if (!error) {
            res.render('Departments/allDepartments', {
                title: 'AdminLTE | All Department',
                dashboardtitle: 'Departments Page',
                message: req.flash('message'),
                error: req.flash('error'),
                displaydata: data
            })
        }
    })
}

// GET - Add Department
exports.addDepartment = ((req, res) => {
    res.render('Departments/addDepartment', {
        title: 'AdminLTE | Add New Department',
        dashboardtitle: 'Departments Page',
        message: req.flash('message')
    })
})


// POST - Add Department
exports.createDepartment = ((req, res) => {
    //console.log(req.body)
    const Department = new departmentModel({
        deptImage: req.file.filename,
        deptName: req.body.deptName,
        deptDescription: req.body.deptDescription
    })
    Department.save()
        .then(result => {
            console.log(result, "Department data created successfully.")
            req.flash('message', 'Added department successfully')
            res.redirect('/admin/allDepartments')
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not send Empty data.')
            res.redirect('/admin/addDepartment')
        })
})



// GET - Single Deaprtment for "Edit Department Page"
exports.singleDeaprtment = ((req, res) => {

    const departmentID = req.params.id

    departmentModel.findById(departmentID)
        .then(result => {
            res.render('Departments/editDepartment', {
                title: 'AdminLTE | Edit Department',
                dashboardtitle: 'Departments Page',
                message: req.flash('message'),
                data: result
            })
        })
})

// PUT - Edit Department
exports.updateDepartment = ((req, res) => {
    departmentModel.findByIdAndUpdate(req.params.id, {
        deptImage: req.file.filename,
        deptName: req.body.deptName,
        deptDescription: req.body.deptDescription
    }, (error, result) => {
        if (!error) {
            console.log(result, "Departments data saved successfully.")
            req.flash('message', 'Departments edited successfully')
            res.redirect('/admin/allDepartments')
        } else {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not save Empty data.')
            res.redirect('/admin/editDepartment')
        }
    })
})

// DELETE - Department
exports.deleteDepartment = ((req, res, next) => {
    const departmentID = req.params.id

    departmentModel.deleteOne({ _id: departmentID })
        .then(result => {
            console.log(result, "Department data deleted successfully.")
            req.flash('message', 'Deleted department data successfully')
            res.redirect('/admin/allDepartments')
        })
        .catch(err => {
            console.log(err, "No Data Deleted.")
            req.flash('error', 'Unable to delete department data.')
            res.redirect('/admin/allDeaprtments')
        })
});