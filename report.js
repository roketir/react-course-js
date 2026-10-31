import { students } from "./data.js";

function withStatus(students) {
    const updatedStudents = [];

    for (const student of students) {
        updatedStudents.push({
            ...student,
            status: student.grade >= 56 ? "pass" : "fail"
        });
    }

    return updatedStudents;
}

export default withStatus;
