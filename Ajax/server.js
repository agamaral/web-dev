const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //sirva os arquivos estáticos!
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//app.get('/teste', (req,res)=> res.send('Ok.')) //quando o /test for invocado atraves d get

app.listen(8081, ()=> console.log('executando server...'))