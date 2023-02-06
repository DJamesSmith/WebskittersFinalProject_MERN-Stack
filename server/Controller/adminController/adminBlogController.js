const BlogModel = require('../../Model/admin/Blog')

// GET - All Blogs
exports.allBlogs = async (req, res) => {

    try {

        var search = ''
        if (req.query.search) {
            search = req.query.search
        }

        var page = 1
        if (req.query.page) {
            page = req.query.page
        }

        const limit = 5

        const blogData = await BlogModel.find({
            $or: [
                { blogName: { $regex: '.*' + search + '.*', $options: 'i' } },
                { blogQuote: { $regex: '.*' + search + '.*', $options: 'i' } }
            ]
        })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec()

        const count = await BlogModel.find({
            $or: [
                { blogName: { $regex: '.*' + search + '.*', $options: 'i' } },
                { blogQuote: { $regex: '.*' + search + '.*', $options: 'i' } }
            ]
        })
            .countDocuments()

        res.render('Blogs/AllBlogs', {
            title: 'AdminLTE | All Blogs',
            dashboardtitle: 'Blogs Page',
            message: req.flash('message'),
            error: req.flash('error'),
            displaydata: blogData,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            previousPage: page - 1,
            nextPage: page - (-1),
            count: count,
            limit: limit
        })

    } catch (error) {
        console.log(error.message)
    }
}

// GET - Add Blog
exports.addBlog = (req, res) => {
    res.render('Blogs/addBlog', {
        title: 'AdminLTE | Add New Blog',
        dashboardtitle: 'Blogs Page',
        message: req.flash('message')
    })
}

// POST - Add Blog
exports.createBlog = (req, res) => {
    //console.log(req.body)
    const Blog = new BlogModel({
        blogName: req.body.blogName,
        blogQuote: req.body.blogQuote,
        blogImage: req.file.filename
    })
    Blog.save()
        .then(result => {
            console.log(result, "Blog data Created Successfully.")
            req.flash('message', 'Blog Added Successfully.')
            res.redirect('/admin/allBlogs')
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not send Empty data.')
            res.redirect('/admin/addBlog')
        })
}

// GET - Single Blog for "Edit Blog Page"
exports.singleBlog = (req, res) => {

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
}

// PUT - Edit Blog
exports.updateBlog = (req, res) => {
    BlogModel.findByIdAndUpdate(req.params.id, {
        blogName: req.body.blogName,
        blogQuote: req.body.blogQuote,
        blogImage: req.file.filename
    }, (error, result) => {
        if (!error) {
            console.log(result, "Blog data edited successfully.")
            req.flash('message', 'Blog edited successfully')
            res.redirect('/admin/allBlogs')
        } else {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not save Empty data.')
            res.redirect('/admin/editBlog')
        }
    })
}

// DELETE - Blog
exports.deleteBlog = (req, res, next) => {
    const blogID = req.params.id

    BlogModel.deleteOne({ _id: blogID })
        .then(result => {
            console.log(result, "Blog data deleted successfully.")
            req.flash('message', 'Deleted Blog data successfully')
            res.redirect('/admin/allBlogs')
        })
        .catch(err => {
            console.log(err, "No Data Deleted.")
            req.flash('error', 'Unable to delete blog data.')
            res.redirect('/admin/allBlogs')
        })
}