const AddStudent = require('../../application/UseCases/AddStudent');
const GetAllStudents = require('../../application/UseCases/GetAllStudents');
const GetStudent = require('../../application/UseCases/GetStudent');
const AddEnrollment = require('../../application/UseCases/AddEnrollment');

module.exports = (dependecies) => {

    const { studentRepository } = dependecies.DatabaseService;

    const addNewStudent = (req, res, next) => {
        // init use case
        const AddStudentCommand = AddStudent(studentRepository);

        // call use case
        AddStudentCommand.Execute(req.body.firstName, req.body.lastName, req.body.email).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    const getAllStudents = (req, res, next) => {
        // init use case
        const GetAllStudentsQuery = GetAllStudents(studentRepository);

        GetAllStudentsQuery.Execute().then((students) => {
            res.json(students);
        }, (err) => {
            next(err);
        });
    };

    const getStudent = (req, res, next) => {
        const GetStudentQuery = GetStudent(studentRepository);

        GetStudentQuery.Execute(req.params.studentId).then((student) => {
            res.json(student);
        }, (err) => {
            next(err);
        });
    };

    const addEnrollment = (req, res, next) => {
        const AddEnrollmentCommand = AddEnrollment(studentRepository);

        AddEnrollmentCommand.Execute(req.params.studentId, req.body).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };
    return {
        addNewStudent,
        getAllStudents,
        getStudent,
        addEnrollment
    };
};
