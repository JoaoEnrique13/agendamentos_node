const express = require('express')
const app = express()
var create = require('./banco')

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
})

app.get("/", function(req, res){
    res.end("Servidor rodando na porta 8081");
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", async function(req, res){
    
    await create(req.params.nome,req.params.endereco,
        req.params.bairro,
        req.params.cep,
        req.params.cidade,
        req.params.estado,
        req.params.observacao
    )

    res.send("Sucesso");

})