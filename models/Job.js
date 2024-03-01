const Sequelize = require('sequelize');
const db = require('../db/connection');
const sequelize = require('../db/connection');

const job = db.Sequelize('job', {
    title: {
        type: sequelize.STRINGS,
    },
    descritions: {
        type: sequelize.STRINGS,
    },
    salary: {
        type: sequelize.STRINGS,
    },
    company: {
        type: sequelize.STRINGS,
    },
    email: {
        type: sequelize.STRINGS,
    },
    new_job: {
        type: sequelize.INTEGER,
    },
})

module.exports = job