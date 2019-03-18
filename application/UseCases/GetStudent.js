module.exports = (StudentRepository) => {

    async function Execute(studentId) {

        return new Promise((resolve, reject) => {
            StudentRepository.getById(studentId).then((response) => {
                resolve(response);
            }, (err) => {
                reject(err);
            });
        });
    }

    return {
        Execute
    };
};
