const Usuario = require("../models/Usuario");

const UsuarioController = {
    index: async (req, res) => {
        const usuarios = await Usuario.find();

        return res.status(200).json(usuarios);
    },

    create: async (req, res) => {
        const { nome, idade, hobbies } = req.body;

        const novoUsuario = await Usuario.create({
            nome,
            idade,
            hobbies
        });

        return res.status(201).json(novoUsuario);
    },

    delete: async (req, res) => {
        //pelo id
        const { id } = req.params;

        //procura e deleta
        const usuario = await Usuario.findByIdAndDelete(id);

        //sucesso, sem retorno
        return res.sendStatus(204);
    },

    update: async (req, res) => {
        //pelo id
        const { id } = req.params;
        const { nome, idade} = req.body;

        //procura e atualiza
        const usuario = await Usuario.findByIdAndUpdate(id,
            {
                //o que quero alterar
                nome,
                idade
            },
            {
                //faz com que retorne o usuario alterado
                new: true
            }
        );

        //sucesso, com retorno do usuario atualizado
        return res.status(201).json(usuario);
    }
}

module.exports = UsuarioController;