const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //sirva os arquivos estáticos!
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalName}`)
    }
})
const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('erro')
        }
        res.end('concluido.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 ===0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8081, () => console.log('executando server...'))
