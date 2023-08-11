const AddStudent = require('../../application/use_cases/AddStudent');
const GetAllStudents = require('../../application/use_cases/GetAllStudents');
const GetStudent = require('../../application/use_cases/GetStudent');
const AddEnrollment = require('../../application/use_cases/AddEnrollment');

module.exports = (dependencies) => {

    const { studentRepository } = dependencies.DatabaseService;
    const { CrmServices } = dependencies;

    const addNewStudent = (req, res, next) => {
        // init use case
        const AddStudentCommand = AddStudent(studentRepository, CrmServices);
        // extract student properties
        const { firstName, lastName, email } = req.body;
        // call use case
        AddStudentCommand.Execute(firstName, lastName, email).then((response) => {
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
