module.exports = (StudentRepository) => {

    async function Execute(studentId) {
        return StudentRepository.getById(studentId);
    }

    return {
        Execute
    };
};
