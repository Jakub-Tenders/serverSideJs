import { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } from "../services/studentsServices.js"

export const getStudents = (req, res) => {
  res.status(200).json(getAllStudents());
};

export const getStudentByIdController = (req, res) => {
  const student = getStudentById(parseInt(req.params.id));
  res.status(200).json(student);
};

export const createStudentController = (req, res) => {
  const student = createStudent(req.body);
  res.status(201).json(student);
};

export const updateStudentController = (req, res) => {
  const student = updateStudent(parseInt(req.params.id), req.body);
  res.status(200).json(student);
};

export const deleteStudentController = (req, res) => {
  const student = deleteStudent(parseInt(req.params.id));
  res.status(200).json(student);
};