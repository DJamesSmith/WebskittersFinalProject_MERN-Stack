const BlogModel = require('../../Model/admin/Blog')
const CommentModel = require('../../Model/admin/Comment')

// GET - All Blogs
exports.allBlogs = (req, res) => {
    CommentModel.find()
    .populate("Blog")
    .exec((error, data) => {
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
        blogDescription: req.body.blogDescription,
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
        blogDescription: req.body.blogDescription,
        blogQuote: req.body.blogQuote,
        blogImage: req.file.filename
    }, (error, result) => {
        if (!error) {
            console.log(result, "Blog data edit successfully.")
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
    // const blogID = req.params.id

    // BlogModel.deleteOne({ _id: blogID })
    //     .then(result => {
    //         console.log(result, "Blog data deleted successfully.")
    //         req.flash('message', 'Deleted Blog data successfully')
    //         res.redirect('/admin/allBlogs')
    //     })
    //     .catch(err => {
    //         console.log(err, "No Data Deleted.")
    //         req.flash('error', 'Unable to delete blog data.')
    //         res.redirect('/admin/allBlogs')
    //     })
}



// -------------------------------------------- Comment Controller ----------------------------------------------------


// GET - All Comments
exports.allComments = (req, res) => {
    CommentModel.find((error, data) => {
        if (!error) {
            res.render('Comments/allComments', {
                title: 'AdminLTE | All Comments',
                dashboardtitle: 'Comments Page',
                message: req.flash('message'),
                error: req.flash('error'),
                displaydata: data
            })
        }
    })
}

// GET - Add Comment Page Render "Form"
exports.addComment = (req, res) => {                                                                // Affect form Blog : Done

    BlogModel.find()
        .then(() => {
            res.render('Comments/addComment', {
                title: 'AdminLTE | Add New Comment',
                dashboardtitle: 'Comments Page',
                message: req.flash('message'),
                displaydata: data
            })
        })
}

// POST - Add Comment
exports.createComment = (req, res) => {
    //console.log(req.body)
    const Comment = new CommentModel({
        commentName: req.body.commentName,
        description: req.body.description,
        image: req.file.filename
    })
    Comment.save()
        .then(result => {
            console.log(result, "Comment data created successfully.")
            req.flash('message', 'Added comment successfully')
            res.redirect('/admin/allBlogs')
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not send Empty data.')
            res.redirect('/admin/addComment')
        })
}

// GET - Single Comment for "Edit Comment Page"
exports.singleComment = (req, res) => {

    const commentID = req.params.id

    CommentModel.findById(commentID)
        .then(result => {
            res.render('Comments/editComment', {
                title: 'AdminLTE | Edit Comment',
                dashboardtitle: 'Comments Page',
                message: req.flash('message'),
                data: result
            })
        })
}

// PUT - Edit Comment
exports.updateComment = (req, res) => {
    // CommentModel.findByIdAndUpdate(req.params.id, {
    //     commentName: req.body.commentName,
    //     description: req.body.description,
    //     image: req.file.filename
    // }, (error, result) => {
    //     if (!error) {
    //         console.log(result, "Comment data saved successfully.")
    //         req.flash('message', 'Comment edited successfully')
    //         res.redirect('/admin/comment')
    //     } else {
    //         console.log(err, "No Data Saved.")
    //         req.flash('error', 'You can not save Empty data.')
    //         res.redirect('/admin/editComment')
    //     }
    // })
}

// DELETE - Comment
exports.deleteComment = (req, res, next) => {
    // const commentID = req.params.id

    // CommentModel.deleteOne({ _id: commentID })
    //     .then(result => {
    //         console.log(result, "Comment data deleted successfully.")
    //         req.flash('message', 'Deleted Comment data successfully')
    //         res.redirect('/admin/comment')
    //     })
    //     .catch(err => {
    //         console.log(err, "No Data Deleted.")
    //         req.flash('error', 'Unable to delete comment data.')
    //         res.redirect('/admin/comment')
    //     })
}