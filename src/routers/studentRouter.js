'use strict'
const express = require('express')
const studentRouter = express.Router()

const studentController = require('../controllers/studentController')

studentRouter.route('/api/students')
.get((req, res) => {
    studentController.getStudents(req, res)
    //res.send("Você solicitou todos os estudantes")
})
.post((req, res) => {
    studentController.createStudent(req, res)
    //res.status(201).json(req.body)
})
.put((req, res) => {
    studentController.updateStudent(req, res)
    /*students.forEach((item, index) => {
        if (item.mat == req.body.mat) {
            students[index] = req.body
        }
    })

    res.status(200).json({message: "Estudante atualizado com sucesso"})*/
})

studentRouter.route('/api/students/:id')
.get((req, res) => {
    studentController.getStudent(req, res)
}).delete((req, res) => {
    studentController.deleteStudentById(req, res)
})

module.exports = studentRouter