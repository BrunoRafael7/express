
//Coloca todo o código no modo strict
//Veja aqui pra mais detalhes -> https://pt.stackoverflow.com/questions/2746/quando-por-que-e-como-utilizar-a-diretiva-use-strict-em-javascript
'use strict'
//É neste arquivo que tudo vai começar. Este é o "public static void main" do nosso servidor NodeJS
const mongoose = require('mongoose')
require('dotenv').config()

//Conecta com o mongoose. Deve ser feita somente uma única vez
mongoose.connect('mongodb://127.0.0.1:27017/test')

const express = require('express')
//Cria a noss aplicação
const app = express()

//Importa os roteadores
const teacherRouter = require('./src/routers/teacherRouter')
const studentRouter = require('./src/routers/studentRouter')
const userRouter = require('./src/routers/userRouter')
//const viewRouter = require('./src/routers/viewRouter')
const middlewareAuth = require('./src/middlewareAuth')

const fs = require('fs')
const http = require('http')
const https = require('https')
const cors = require('cors')

const options = {
  key:fs.readFileSync('./cert/certKey.key', 'utf8'), 
  cert:fs.readFileSync('./cert/certificate.crt', 'utf8')
}

http.createServer(app).listen(3333)
//https.createServer(options, app).listen(443)

//Define tudo o que será usado na nossa aplicação.
//Perceba que os roteadores precisam ser declarados como use para poderem de fato serem usados pela nossa app
// Configura a view engine como sendo o ejs
//app.set('view engine', 'ejs');
//app.set('views', './src/views')
app.use(cors())
app.use(express.json())
app.use(middlewareAuth)
app.use(teacherRouter)
app.use(studentRouter)
app.use(userRouter)
//app.use(viewRouter)


//Executa assim que o servidor está rodando. 
//Aqui você pode fazer alguma configuração inicial assim que o servidor ficar online
/*app.listen(port, () => {
    console.log(`O servidor está executando na porta ${port}`)
})*/



