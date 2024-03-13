const express = require('express');
const router = express.Router(); // obejto de rotas do express
const job = require('../models/jobs');
const jobs = require('../models/jobs');


// rota de teste 
router.get('/test', (req, res) => {
    res.send("deu certo");
});

// detalhe da vaga -> view/1, view/2
router.get('/view/:id', (req, res) => jobs.findOne({
    where: { id: req.params.id }
}).then(job => {

    res.render('view', {
        job
    });

}).catch(err => console.log(err)));


// form da rota de view
router.get('/add', (req, res) => {
    res.render('add');
});



// add job via post
router.post('/add', (req, res) => {

    const { title, salary, company, description, email, new_job } = req.body;

    // insert
    job.create({
        title,
        salary,
        company,
        description,
        email,
        new_job,

    })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));

});

module.exports = router