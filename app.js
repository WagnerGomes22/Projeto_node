const express    = require('express')
const exphbs     = require ('express-handlebars');
const app        = express();
const path       = require('path')
const db         = require('./db/connection');
const bodyParser = require ('body-parser');

const port = 3000;

app.listen(port, function() {
    console.log(`o Express está funcionando na porta ${port}`);

});
// body parser

app.use(bodyParser.urlencoded({extended: false }));

// Handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'layout/main'}));
app.set('view engine', 'handlebars');


// static folder
app.use(express.static(path.join(__dirname, 'public')));


// db connections
// conexão do banco quando ela for iniciada(Teste)
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
    // renderização do index na pagina index.handlebars
    res.render("index");
});

// jobs routes

app.use('/jobs', require('./routes/jobs'));
