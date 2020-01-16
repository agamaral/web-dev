const porta = 3003;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true})); //converte o corpo da requisição em objeto, para q eu possa acessar

const bancoDeDados = require('./bancoDeDados');

app.get('/produtos', (req, res,next)=> { 
    res.send(bancoDeDados.getProdutos());
})

app.get('/produtos/:id', (req, res, next) => {      //requisição, resposta e next //obter algo do banco de dados
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => { //salvar algo no banco de  dados!!!! mt legal
    const produto = bancoDeDados.salvarProduto({
        nome:req.body.nome,
        preco: req.body.preco
    })
    res.send(produto); //JSON
})

app.delete('/produtos', (req, res, next) => { //salvar algo no banco de  dados!!!! mt legal
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto); //JSON
})

app.put('/produtos:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome:req.body.nome,
        preco: req.body.preco
    })
    res.send(produto); //JSON
})

app.listen(porta, () => {
    console.log(`servidor execcutando na porta ${porta}.`);
})