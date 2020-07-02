const { Schema, model} = require('mongoose');

const Usuario = new Schema({
    //relação de colunas/atributos
        nome: {
            type: 'String',
            riquered: true,
        },
        idade: {
            type: 'Number',
        },
        hobbies: [],
    },
    {
        timestamps: true,
    }
);

//nome da model, nome do schema
module.exports = model('Usuario', Usuario)