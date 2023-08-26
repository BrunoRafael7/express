
//Coloca todo o código no modo strict
//Veja aqui pra mais detalhes -> https://pt.stackoverflow.com/questions/2746/quando-por-que-e-como-utilizar-a-diretiva-use-strict-em-javascript
'use strict'
//É neste arquivo que tudo vai começar. Este é o "public static void main" do nosso servidor NodeJS
const mongoose = require('mongoose')

//Conecta com o mongoose. Deve ser feita somente uma única vez
mongoose.connect('mongodb://127.0.0.1:27017/test')

const express = require('express')

//Cria a noss aplicação
const app = express()

//Define qual a porta. 
//Pega primeiro da variavel de ambiente process.env.port se não tiver nada lá, define como 3000
const port = process.env.port || 3000

//Importa os roteadores
const teacherRouter = require('./src/routers/teacherRouter')
const studentRouter = require('./src/routers/studentRouter')

//Define tudo o que será usado na nossa aplicação.
//Perceba que os roteadores precisam ser declarados como use para poderem de fato serem usados pela nossa app
app.use(express.json())
app.use(teacherRouter)
app.use(studentRouter)

//Executa assim que o servidor está rodando. 
//Aqui você pode fazer alguma configuração inicial assim que o servidor ficar online
app.listen(port, () => {
    console.log(`O servidor está executando na porta ${port}`)
})



