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
    },
    docDescription: {
        type: String,
        required: true
    },
    docQualificationName: {
        type: String,
        required: true
    },
    docYear: {
        type: String,
        required: true
    },
    docQualificationDescription: {
        type: String,
        required: true
    },
    docSkills: {
        type: String,
        required: true
    },
    docExpertise: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('AdminDoctor', doctorSchema)
