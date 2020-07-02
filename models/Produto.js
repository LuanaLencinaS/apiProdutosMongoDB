const { Schema, model} = require('mongoose');

const Produto = new Schema({
    //relação de colunas/atributos
        nome: {
            type: 'String',
            riquered: true,
        },
        descricao: {
            type: 'String',
        },
        quantidade: {
            type: 'Number',
        },
        preco: {
            type: 'Number',
        },
    },
    {
        timestamps: true,
    }
);

//nome da model, nome do schema
module.exports = model('Produto', Produto)