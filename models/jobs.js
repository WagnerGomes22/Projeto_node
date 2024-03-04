const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');


const jobs = sequelize.define('jobs', {
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    salary: {
        type: DataTypes.STRING,
    },
    company: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    new_job: {
        type: DataTypes.INTEGER,
    },
});

module.exports = jobs;
