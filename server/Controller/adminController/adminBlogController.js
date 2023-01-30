const BlogModel = require('../../Model/admin/Blog')

// GET - All Blogs
exports.allBlogs = (req, res) => {
    BlogModel.find((error, data) => {
        if (!error) {
            res.render('Blogs/AllBlogs', {
                title: 'AdminLTE | All Blogs',
                dashboardtitle: 'Blogs Page',
                message: req.flash('message'),
                error: req.flash('error'),
                displaydata: data
            })
        }
    })
}

// GET - Add Blog
exports.addBlog = ((req, res) => {
    res.render('Blogs/addBlog', {
        title: 'AdminLTE | Add New Blog',
        dashboardtitle: 'Blogs Page',
        message: req.flash('message')
    })
})

// POST - Add Blog
exports.createBlog = ((req, res) => {
    // //console.log(req.body)
    // const Blog = new BlogModel({
    //     blogName: req.body.blogName,
    //     description: req.body.description,
    //     image: req.file.filename
    // })
    // Blog.save()
    //     .then(result => {
    //         console.log(result, "Blog data created successfully.")
    //         req.flash('message', 'Added blog successfully')
    //         res.redirect('/admin/blog')
    //     })
    //     .catch(err => {
    //         console.log(err, "No Data Saved.")
    //         req.flash('error', 'You can not send Empty data.')
    //         res.redirect('/admin/addBlog')
    //     })
})

// GET - Single Blog for "Edit Blog Page"
exports.singleBlog = ((req, res) => {

    const blogID = req.params.id

    BlogModel.findById(blogID)
        .then(result => {
            res.render('Blogs/editBlog', {
                title: 'AdminLTE | Edit Blog',
                dashboardtitle: 'Blogs Page',
                message: req.flash('message'),
                data: result
            })
        })
})

// PUT - Edit Blog
exports.updateBlog = ((req, res) => {
    // BlogModel.findByIdAndUpdate(req.params.id, {
    //     blogName: req.body.blogName,
    //     description: req.body.description,
    //     image: req.file.filename
    // }, (error, result) => {
    //     if (!error) {
    //         console.log(result, "Blog data saved successfully.")
    //         req.flash('message', 'Blog edited successfully')
    //         res.redirect('/admin/blog')
    //     } else {
    //         console.log(err, "No Data Saved.")
    //         req.flash('error', 'You can not save Empty data.')
    //         res.redirect('/admin/editBlog')
    //     }
    // })
})

// DELETE - Blog
exports.deleteBlog = ((req, res, next) => {
    // const blogID = req.params.id

    // BlogModel.deleteOne({ _id: blogID })
    //     .then(result => {
    //         console.log(result, "Blog data deleted successfully.")
    //         req.flash('message', 'Deleted Blog data successfully')
    //         res.redirect('/admin/blog')
    //     })
    //     .catch(err => {
    //         console.log(err, "No Data Deleted.")
    //         req.flash('error', 'Unable to delete blog data.')
    //         res.redirect('/admin/blog')
    //     })
})