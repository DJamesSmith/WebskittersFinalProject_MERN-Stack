const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    blogImage: {
        type: String,
        required: true
    },
    blogName: {
        type: String,
        required: true
    },
    blogDescription: {
        type: String,
        required: true
    },
    blogQuote: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Blog', blogSchema)