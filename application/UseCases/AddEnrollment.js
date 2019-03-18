/* eslint-disable arrow-body-style */
module.exports = (StudentRepository) => {

    const Execute = async (studentId, enrollment) => {
        const student = await StudentRepository.getById(studentId);
        return new Promise((resolve, reject) => {
            // business validation
            if (!student || !enrollment) {
                reject(new Error('validation failed'));
                return;
            }
            // to be implemented - check if course exist
            // check if user already has this enrollment
            if (student.enrollments.some(e => e.course.id === enrollment.course.id)) {
                reject(new Error('validation failed: user already registered to this course'));
                return;
            }

            // can add validation with joi

            StudentRepository.addEnrollment(studentId, enrollment).then((response) => {
                resolve(response);
            }, (err) => {
                reject(err);
            });
        });
    };
    return {
        Execute
    };
};
