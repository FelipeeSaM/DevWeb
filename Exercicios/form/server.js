const express = require('express'); // SERVER.JS é o servidor que faz com que a aplicação fique online (basta deixar o pc ligado com o node server.js rodando), posso acessar de qualquer navegador
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Usuario cadastrado</h1>')
});

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Usuario alterado</h1>')
});


app.listen(3003);