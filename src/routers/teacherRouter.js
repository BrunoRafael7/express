'use strict'
const express = require('express')
const teacherRouter = express.Router()

const teacherController = require('../controllers/teacherController')

let teachers = [{name: "Anderson", mat: 1472}, {name: "Abella", mat: 5698}]

teacherRouter.route('/api/teachers')
.get((req, res) => {
    res.send("Você solicitou todos os professores")
})
.post((req, res) => {
    res.status(201).json(req.body)
})
.put((req, res) => {
    teachers.forEach((item, index) => {
        if (item.mat == req.body.mat) {
            teachers[index] = req.body
        }
    })

    res.status(200).json({message: "Professor atualizado com sucesso"})
})

teacherRouter.route('/api/teachers/:id')
.get((req, res) => {
    //
})
.delete((req, res) => {
    console.log(req.params.id)
    console.log(req.query.id)
})

module.exports = teacherRouter