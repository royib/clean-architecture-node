const express = require('express');
const StudentController = require('../../../controllers/students/StudentController');

// address - api/students
// load dependencies
const studentsRouter = (dependencies) => {
    const router = express.Router();

    // load controller with dependencies
    const controller = StudentController(dependencies);

    router.route('/')
        .get(controller.getAllStudents)
        .post(controller.addNewStudent);
    router.route('/:studentId')
        .get(controller.getStudent);
    router.route('/enrollment/:studentId')
        .post(controller.addEnrollment);
    return router;
};


module.exports = studentsRouter;
