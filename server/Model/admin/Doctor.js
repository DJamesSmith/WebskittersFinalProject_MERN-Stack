const mongoose = require('mongoose')

const doctorSchema = mongoose.Schema({
    deptImage: {
        type: String,
        require: false
    },
    docName: {
        type: String,
        require: true
    },
    deptName: {
        type: String,
        require: true
    },
    docDescription: {
        type: String,
        require: true
    },
    docQualificationName: {
        type: String,
        require: true
    },
    docQualificationDescription: {
        type: String,
        require: true
    },
    docYear: {
        type: String,
        require: true
    },
    docSkills: {
        type: String,
        require: true
    },
    docExpertise: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Doctor', doctorSchema)