const mongoose = require('mongoose')
//Importando o Schema para criação de uma especificação do modelo que será criado no banco
const Schema = mongoose.Schema

//Definindo o esquema (Muito semelhante as definições de schemas em bancos SQL como postgres e MySQL)
const teacherSchema = new Schema({
    //O tipo do nome será string e será obrigatório
    name: {type: String, required: true},
    //O tipo será numérico e terá de estar entre 18 e 150 fora disso dá erro
    age: {type: Number, min:22, max: 150},
    //A matrícula será numérica, obrigatória e única, ou seja, não pode ter nenhum estudante com duas matrículas
    mat: {type: Number, required: true, unique: true},
    //CPF deverá ser numérico, obrigatório e único
    cpf: {type: Number, required: true, unique: true},
    //Curso será do tipo String
    course: String
})

/*O primeiro parametro será o nome da coleção no banco. A coleção é como se fosse a tabela nem bancos de dados SQL
O segundo será o Schema pra criar essa coleção. E o schema nada mais é do que o que você criou anteriormente */
module.exports = mongoose.model("TeacherModel", teacherSchema)

