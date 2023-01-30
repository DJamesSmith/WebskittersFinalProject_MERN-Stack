const UserModel = require('../../Model/User')

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
exports.createUser = ((req, res) => {
})

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
exports.updateUser = ((req, res) => {
})

// DELETE - User
exports.deleteUser = ((req, res, next) => {
})