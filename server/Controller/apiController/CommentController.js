const CommentModel = require('../../Model/admin/Comment')

// GET - All Comments
exports.allComments = (req, res) => {
    CommentModel.find((error, data) => {
        console.log(data)
        if (!error) {
            res.status(200).send({ success: true, msg: "All Comments from API fetched Successfully !", displaydata: data })
        }
    })
}

// GET - Single Comment
exports.singleComment = (req, res) => {

    const commentID = req.params.id

    CommentModel.findById(commentID)
        .then(result => {
            res.status(200).send({ success: true, msg: `Comment ID ${commentID} from API fetched Successfully !`, data: result })
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Some error occurred while creating a Comment" })
        })
}

// POST - Add Comment
exports.createComment = async (req, res) => {
    //console.log(req.body)
    if (!req.body) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    const Comment = new CommentModel({
        commentName: req.body.commentName,
        commentEmail: req.body.commentEmail,
        commentMessage: req.body.commentMessage,
        commentAddress: req.body.commentAddress
    })

    await Comment.save()
        .then(data => {
            res.status(200).send({ success: true, msg: "User's Comment created using API successfully!", commentData: data })
        }).catch(err => {
            res.status(500).send({ message: err.message || "Some error occurred while creating a Comment" })
        })
}

// PUT - Edit Comment
exports.updateComment = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    const commentID = req.params.id
    const commentName = req.body.commentName
    const commentEmail = req.body.commentEmail
    const commentMessage = req.body.commentMessage
    const commentAddress = req.body.commentAddress

    CommentModel.findById(commentID)
        .then(async result => {
            result.commentName = commentName
            result.commentEmail = commentEmail
            result.commentMessage = commentMessage
            result.commentAddress = commentAddress

            await result.save()
                .then(data => {
                    res.status(200).send({ success: true, msg: `Comment edited using API successfully !`, editedCommentData: data })
                })
                .catch(err => {
                    res.status(500).send({ message: err.message || "Some error occurred while creating a Comment" })
                })
        })
}

// DELETE - Comment
exports.deleteComment = (req, res, next) => {
    const commentID = req.params.id

    console.log('CommentID Value: ', commentID)

    CommentModel.deleteOne({ _id: commentID })
        .then(data => {
            res.status(200).send({ success: true, msg: `Data with Comment ID [${commentID}] using API deleted Successfully !`, comment: data })
        })
        .catch(error => {
            console.log(`Error: ${error}`)
        })
}