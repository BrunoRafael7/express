const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, min:18, max: 150},
    mat: {type: Number, required: true},
    course: String
})

module.exports = mongoose.model("StudentModel", studentSchema)