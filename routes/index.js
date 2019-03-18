const express = require('express');
const students = require('./students');

const apiRouter = (dependencies) => {
    const routes = express.Router();

    const studentsRouter = students(dependencies);

    routes.use('/students', studentsRouter);
    return routes;

};


module.exports = apiRouter;
