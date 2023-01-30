const DepartmentModel = require('../../Model/admin/Department')

// GET - All Departments
exports.allDepartments = (req, res) => {
    DepartmentModel.find((error, data) => {
        if (!error) {
            res.render('Departments/allDepartments', {
                title: 'AdminLTE | All Departments',
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
    // //console.log(req.body)
    // const Department = new DepartmentModel({
    //     departmentName: req.body.departmentName,
    //     description: req.body.description,
    //     image: req.file.filename
    // })
    // Department.save()
    //     .then(result => {
    //         console.log(result, "Department data created successfully.")
    //         req.flash('message', 'Added department successfully')
    //         res.redirect('/admin/department')
    //     })
    //     .catch(err => {
    //         console.log(err, "No Data Saved.")
    //         req.flash('error', 'You can not send Empty data.')
    //         res.redirect('/admin/addDepartment')
    //     })
})

// GET - Single Department for "Edit Department Page"
exports.singleDepartment = ((req, res) => {

    const departmentID = req.params.id

    DepartmentModel.findById(departmentID)
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
    // DepartmentModel.findByIdAndUpdate(req.params.id, {
    //     departmentName: req.body.departmentName,
    //     description: req.body.description,
    //     image: req.file.filename
    // }, (error, result) => {
    //     if (!error) {
    //         console.log(result, "Department data saved successfully.")
    //         req.flash('message', 'Department edited successfully')
    //         res.redirect('/admin/department')
    //     } else {
    //         console.log(err, "No Data Saved.")
    //         req.flash('error', 'You can not save Empty data.')
    //         res.redirect('/admin/editDepartment')
    //     }
    // })
})

// DELETE - Department
exports.deleteDepartment = ((req, res, next) => {
    // const departmentID = req.params.id

    // DepartmentModel.deleteOne({ _id: departmentID })
    //     .then(result => {
    //         console.log(result, "Department data deleted successfully.")
    //         req.flash('message', 'Deleted Department data successfully')
    //         res.redirect('/admin/department')
    //     })
    //     .catch(err => {
    //         console.log(err, "No Data Deleted.")
    //         req.flash('error', 'Unable to delete department data.')
    //         res.redirect('/admin/department')
    //     })
})