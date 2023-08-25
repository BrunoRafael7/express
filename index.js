'use strict'

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

const express = require('express')
const app = express()
const port = process.env.port || 3000

const teacherRouter = require('./src/routers/teacherRouter')
const studentRouter = require('./src/routers/studentRouter')

app.use(express.json())
app.use(teacherRouter)
app.use(studentRouter)

app.listen(port, () => {
    console.log(`O servidor está executando na porta ${port}`)
})



