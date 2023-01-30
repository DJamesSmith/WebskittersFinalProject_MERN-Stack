const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    commentName: {
        type: String,
        required: true
    },
    commentEmail: {
        type: String,
        required: true
    },
    commentMessage: {
        type: String,
        required: true
    },
    blogName: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Comment', commentSchema)