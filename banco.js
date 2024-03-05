const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "", {
    host: "localhost",
    dialect: "mysql"
})
sequelize.authenticate().then(function(){
    console.log("Servidor ativo");
}).catch(function(erro){
    console.log("Falha na conexão: " + erro);
})

const agendamentos = sequelize.define("agendamentos", {
    nome:{
        type:  Sequelize.STRING
    },
    endereco:{
        type:  Sequelize.STRING
    },
    bairro:{
        type:  Sequelize.STRING
    },
    cep:{
        type:  Sequelize.STRING
    },
    cidade: {
        type:  Sequelize.STRING
    },
    estado:{
        type:  Sequelize.STRING
    },
    observacao:{
        type:  Sequelize.STRING
    }
})

var create = function(nome, endereco, bairro, cep, cidade, estado, observacao){
    agendamentos.create({
        nome: nome,
        endereco: endereco,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        estado: estado,
        observacao: observacao
    })
}

// agendamentos.sync({force: true})

// agendamentos.create({
//     nome: "João Enrique",
//     endereco: "Rua tal",
//     bairro: "Vila Progresso",
//     cep: "09765-245",
//     cidade: "São Paulo",
//     estado: "SP",
//     observacao: "teste"
// })


module.exports = create

//passando req como parametro
