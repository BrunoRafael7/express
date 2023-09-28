'use strict'
//Importa o express
const express = require('express')

const userRouter = express.Router()

const userController = require('../controllers/userController')

userRouter.route('/api/users')
.get((req, res) => userController.getUser(req, res))
.put((req, res) => userController.updateUser(req, res))


userRouter.route('/api/users/:id')
.get((req, res) => userController.getUser(req, res))
.delete((req, res) => userController.deleteUserById(req, res))

userRouter.route('/login').post((req, res) => userController.login(req, res))
userRouter.route('/register/user').post((req, res) => userController.createUser(req, res))

module.exports = userRouter