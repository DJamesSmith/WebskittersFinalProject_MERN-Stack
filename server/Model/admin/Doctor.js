const mongoose = require('mongoose')

const doctorSchema = mongoose.Schema({
    docImage: {
        type: String,
        required: true
    },
    docName: {
        type: String,
        required: true
    },
    deptName: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Doctor', doctorSchema)
