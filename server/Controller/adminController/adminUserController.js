const bcryptjs = require('bcryptjs')
const UserModel = require('../../Model/User')

// Password checking method
const securePassword = async (password) => {
    try {
        const passwordHash = await bcryptjs.hash(password, 10)
        return passwordHash
    } catch (error) {
        // res.status(400).send(error.message)
        console.log(error)
    }
}

// GET - All Users
exports.allUsers = (req, res) => {
    UserModel.find((error, data) => {
        if (!error) {
            res.render('Users/allUsers', {
                title: 'AdminLTE | All Users',
                dashboardtitle: 'Users Page',
                message: req.flash('message'),
                error: req.flash('error'),
                displaydata: data
            })
        }
    })
}

// GET - Add User
exports.addUser = ((req, res) => {
    res.render('Users/addUser', {
        title: 'AdminLTE | Add New User',
        dashboardtitle: 'Users Page',
        message: req.flash('message')
    })
})

// POST - Add User
exports.createUser = async (req, res) => {
    //console.log(req.body)
    const setpassword = await securePassword(req.body.password)

    const User = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: setpassword,
        mobile: req.body.mobile,
        image: req.file.filename,
        status: 1
    })
    User.save()
        .then(result => {
            console.log(result, "User data created successfully.")
            req.flash('message', 'Added user successfully')
            res.redirect('/admin/allUsers')
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not send Empty data.')
            res.redirect('/admin/addUser')
        })
}

// GET - Single User for "Edit User Page"
exports.singleUser = ((req, res) => {

    const userID = req.params.id

    UserModel.findById(userID)
        .then(result => {
            res.render('Users/editUser', {
                title: 'AdminLTE | Edit User',
                dashboardtitle: 'Users Page',
                message: req.flash('message'),
                data: result
            })
        })
})

// PUT - Edit User
exports.updateUser = async (req, res) => {

    const setpassword = await securePassword(req.body.password)

    UserModel.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        password: setpassword,
        mobile: req.body.mobile,
        image: req.file.filename,
        status: 1
    }, (error, data) => {
        if (!error) {
            console.log("User Updated: ", data)
            res.redirect('/admin/allUsers')
        } else {
            console.log(error)
        }
    })
}

// DELETE - User (Soft Delete)
exports.deleteUser = ((req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, { status: 0 },
        (error, data) => {
            if (!error) {
                console.log('Deleted Successfully.', data)
                res.redirect('/admin/allUsers')
            } else {
                console.log(error)
                res.redirect('/admin/allUsers')
            }
        })
})