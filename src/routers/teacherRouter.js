'use strict'
//Importa o express
const express = require('express')
//Cria o roteador de professores
const teacherRouter = express.Router()
//Importação do controller de professores que criamos
const teacherController = require('../controllers/teacherController')

//Quando uma requisição chegar o express vai escolher qual ação executar

//Roteamento recursos relacionados a professores. 
//A URL do recurso e o método HTTP que você passar como parâmetro na requisição
//no lado do cliente na hora que for chamar o servidor, definem qual método será executado aqui
teacherRouter.route('/api/teachers')
.get((req, res) => teacherController.getTeachers(req, res))
.post((req, res) => teacherController.createTeacher(req, res))
.put((req, res) => teacherController.updateTeacher(req, res))

//Roteamento recursos relacionados a professores com uma URL passando um id como parametro
teacherRouter.route('/api/teachers/:id')
.get((req, res) => teacherController.getTeacher(req, res))
.delete((req, res) => teacherController.deleteTeacherById(req, res))

//Para que tudo que escrevemos de código dentro de um arquivo seja liberado para o restante da aplicação acessar
//Precisamos exportar isso no module.exports. Se você não usar ele não terá como acessar os metodos e atributos
//que declarar dentro de um arquivo
module.exports = teacherRouter