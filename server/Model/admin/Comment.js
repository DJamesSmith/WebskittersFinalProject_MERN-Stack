const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
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
    commentAddress: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Comment', commentSchema)