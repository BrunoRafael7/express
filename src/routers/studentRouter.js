'use strict'
//Importa o express
const express = require('express')
//Cria o roteador de estudantes
const studentRouter = express.Router()
//Importação do controller de estudantes que criamos
const studentController = require('../controllers/studentController')

//Quando uma requisição chegar o express vai escolher qual ação executar

//Roteamento recursos relacionados a estudantes
studentRouter.route('/api/students')
.get((req, res) => studentController.getStudents(req, res))
.post((req, res) => studentController.createStudent(req, res))
.put((req, res) => studentController.updateStudent(req, res))

//Roteamento recursos relacionados a estudantes com uma URL passando um id como parametro
studentRouter.route('/api/students/:id')
.get((req, res) => studentController.getStudent(req, res))
.delete((req, res) => studentController.deleteStudentById(req, res))

//Para que tudo que escrevemos de código dentro de um arquivo seja liberado para o restante da aplicação acessar
//Precisamos exportar isso no module.exports. Se você não usar ele não terá como acessar os metodos e atributos
//que declarar dentro de um arquivo
module.exports = studentRouter