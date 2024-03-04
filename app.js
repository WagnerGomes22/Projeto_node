const express    = require('express')
const app        = express();
const db         = require('./db/connection');
const bodyParser = require ('body-parser');

const port = 3000;

app.listen(port, function() {
    console.log(`o Express está funcionando na porta ${port}`);

});
// body parser

app.use(bodyParser.urlencoded({extended: false }));

// conexão do banco quando ela for iniciada(Teste)
// db connections
db
.authenticate()
.then(() => {
    console.log("Conectou ao banco com sucesso");
})
.catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
});

// ROUTES
app.get('/',(req, res) => {
    res.end("Esta funcionando");
});

// jobs routes

app.use('/jobs', require('./routes/jobs'));
