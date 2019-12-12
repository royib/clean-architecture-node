/* eslint-disable arrow-body-style */
module.exports = (StudentRepository) => {

    const Execute = async (studentId, enrollment) => {
        const student = await StudentRepository.getById(studentId);

        // business validation
        if (!student || !enrollment) {
            throw new Error('validation failed');
        }

        // to be implemented - check if course exist
        // check if user already has this enrollment
        if (student.enrollments.some(e => e.course.id === enrollment.course.id)) {
            throw new Error('validation failed: user already registered to this course');
        }

        // can add validation with joi

        return StudentRepository.addEnrollment(studentId, enrollment);
    };
    return {
        Execute
    };
};
