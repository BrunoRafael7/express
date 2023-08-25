
const StudentModel = require('../models/studentModel')

module.exports= {
    getStudents: (req, res) => {
        StudentModel.find({}).select(["-__v", "-_id"]).then((result) => {
            res.status(200).json(result)
        }).catch(() => {
            res.status(500).json({message: "Não foi possível recuperar os estudantes"})
        })
    },
    deleteStudentById: (req, res) => {

    },
    getStudent: (req, res) => {

    },
    updateStudent: (req, res) => {

    },
    //Criar um estudante
    createStudent: async (req, res) => {
        // Usando o await, o erro do reject pode ser capturado com um try catch
        try {
            // Sempre que o resultado for uma promise da pra usar o await e esperar a "promessa" terminar
            // Lembre-se que o await só da pra usar dentro de funções async
            const result = await StudentModel.create(req.body)

            /**
             * res é o objeto resposta que damos para o servidor e ele possui alguns métodos como em java que criamos 
             * a classe com atributos e também métodos que realizam alguma ação internamente na classe
             *
             * A função .json transforma o que você passar por parâmetro em formato json, se ja for um json ele nada faz
             */

            /**
             * 201 significa que o recurso foi criado e a mensagem de volta é uma mensagem indicando o que aconteceu 
             * com a chamada ao servidor
             */
            res.status(201).json({message: `O estudante ${result._doc.name} foi criado com sucesso!`})
        } catch (err) {

            /**
             * Mesma lógiac do caso anterior só que aqui nós temos uma response que deu errado
             */
            res.status(500).json({message: `Não foi possível criar o estudante ${req.body.name}`})

        }
    }
}