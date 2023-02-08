const DoctorModel = require('../../Model/admin/Doctor');
const DepartmentModel = require('../../Model/admin/Department')

// GET - All Doctors
exports.allDoctors = (req, res) => {
    DoctorModel.find()
        .populate("department")
        .exec((error, data) => {
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

// exports.allDoctors = async (req, res) => {
//     try {

//         DoctorModel.find().populate("department")
//         // console.log('--------------------------------', quickData)

//         var search = ''
//         if (req.query.search) {
//             search = req.query.search
//         }

//         var page = 1
//         if (req.query.page) {
//             page = req.query.page
//         }

//         const limit = 5

//         const doctorData = await DoctorModel.find({
//             $or: [
//                 { docName: { $regex: '.*' + search + '.*', $options: 'i' } },
//                 { department: { $regex: '.*' + search + '.*', $options: 'i' } }
//             ]
//         })
//             // .populate("department")
//             .limit(limit * 1)
//             .skip((page - 1) * limit)
//             .exec()

//         const count = await DoctorModel.find({
//             $or: [
//                 { docName: { $regex: '.*' + search + '.*', $options: 'i' } },
//                 { department: { $regex: '.*' + search + '.*', $options: 'i' } }
//             ]
//         })
//             // .populate("department")
//             .countDocuments()

//         res.render('Doctors/allDoctors', {
//             title: 'AdminLTE | All Doctors',
//             dashboardtitle: 'Doctors Page',
//             message: req.flash('message'),
//             error: req.flash('error'),
//             displaydata: doctorData,
//             totalPages: Math.ceil(count / limit),
//             currentPage: page,
//             previousPage: page - 1,
//             nextPage: page - (-1),
//             count: count,
//             limit: limit
//         })

//     } catch (error) {
//         console.log(error.message)
//     }
// }

// GET - Add Doctor
exports.addDoctor = ((req, res) => {
    DepartmentModel.find().then(result => {
        res.render('Doctors/addDoctor', {
            title: 'AdminLTE | Add New Doctor',
            dashboardtitle: 'Doctors Page',
            message: req.flash('message'),
            displayDatas: result,
        })
    })
})

// POST - Add Doctor
exports.createDoctor = ((req, res) => {
    console.log(req.body)
    const Doctor = new DoctorModel({
        docImage: req.file.filename,
        department: req.body.department,
        docName: req.body.docName
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


// DELETE - Doctor
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