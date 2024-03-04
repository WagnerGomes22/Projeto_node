const express = require('express');
const router = express.Router(); // obejto de rotas do express
const job = require('../models/jobs');

// rota de teste 
router.get('/test', (req, res) => {
    res.send("deu certo");
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