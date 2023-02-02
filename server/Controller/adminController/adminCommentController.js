const CommentModel = require('../../Model/admin/Comment')

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

// GET - Add Comment
exports.addComment = ((req, res) => {
    res.render('Comments/addComment', {
        title: 'AdminLTE | Add New Comment',
        dashboardtitle: 'Comments Page',
        message: req.flash('message')
    })
})

// POST - Add Comment
exports.createComment = ((req, res) => {
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
            res.redirect('/admin/comment')
        })
        .catch(err => {
            console.log(err, "No Data Saved.")
            req.flash('error', 'You can not send Empty data.')
            res.redirect('/admin/addComment')
        })
})

// GET - Single Comment for "Edit Comment Page"
exports.singleComment = ((req, res) => {

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
})

// PUT - Edit Comment
exports.updateComment = ((req, res) => {
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
})

// DELETE - Comment
exports.deleteComment = ((req, res, next) => {
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
})