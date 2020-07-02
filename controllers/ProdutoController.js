const Produto = require("../models/Produto");

const ProdutoController = {
    index: async (req, res) => {
        const produtos = await Produto.find();

        return res.status(200).json(produtos);
    },

    create: async (req, res) => {
        const { nome, descricao, quantidade, preco } = req.body;

        const novoProduto = await Produto.create({
            nome,
            descricao,
            quantidade,
            preco
        });

        return res.status(201).json(novoProduto);
    }
}

module.exports = ProdutoController;