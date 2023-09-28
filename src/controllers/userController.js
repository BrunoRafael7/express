
const UserModel = require('../models/userModel')
const jwtService = require('jsonwebtoken')
module.exports= {
    getUsers: (req, res) => {
        UserModel.find({}).then((result) => {
            res.status(200).json(result)
        }).catch(() => {
            res.status(500).json({message: "Não foi possível recuperar os Users"})
        })
    },
    deleteUserById: async (req, res) => {
        try {
            await UserModel.deleteOne({cpf: req.params.id})
            res.status(200).json({message: "User removido com sucesso!"})
        } catch (err) {
            res.status(500).json({message: "Não foi possível remover o User"})
        }
    },
    getUser: async (req, res) => {
        try {
            const result = await UserModel.findOne({cpf: req.body.cpf})
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json({message: "Não foi possível recuperar o User no momento"})
        }
    },
    updateUser: async (req, res) => {
        try {
            await UserModel.updateOne({cpf: req.body.cpf}, req.body)
            res.status(200).send({message: "User atualizado com sucesso!"})
        } catch (err) {
            res.status(500).json({message: "Não foi possível atualizar os dados"})
        }
    },
    //Criar um User
    createUser: async (req, res) => {
        try {
            const result = await UserModel.create(req.body)
            res.status(201).json({message: `O User ${result._doc.name} foi criado com sucesso!`})
        } catch (err) {

            res.status(500).json({message: `Não foi possível criar o User ${req.body.name}`})

        }
    },

    login: async (req, res) => {
        const result = await UserModel.findOne({email: req.body.email, password: req.body.password})
        if (!result) {
            res.status(401).send({message: "Usuário não autorizado"})
        } else {
            const secret = process.env.SECRET
            jwtService.sign(req.body, secret, (err, token)=>{
                if (err) {
                    res.status(401).json({message: "Usuário não autorizado"})
                }
                res.status(200).json({"Access-Token": token})
            })
        }
    }
}