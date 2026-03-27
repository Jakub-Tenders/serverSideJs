import students from "../students.json" with { type: "json" }

export function getAllStudents() {
  return students;
}

export const getStudentById = (id) => {
  return students.find((student) => student.id === id);
};

export const createStudent = (newStudent) => {
  const student = { id: students.length + 1, ...newStudent };
  students.push(student);
  return student;
};

export const updateStudent = (id, updatedStudent) => {
  const student = students.find((student) => student.id === id);
  Object.assign(student, updatedStudent);
  return student;
};

export const deleteStudent = (id) => {
  const index = students.findIndex((student) => student.id === id);
  const student = students[index];
  students.splice(index, 1);
  return student;
};