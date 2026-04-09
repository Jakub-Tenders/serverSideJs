import { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } from "../services/studentsServices.js"

export const getStudents = async (req, res) => {
  const students = await getAllStudents()
  res.status(200).json(students);
};

export const getStudentByIdController = async (req, res) => {
  const student = await getStudentById(parseInt(req.params.id));
  res.status(200).json(student);
};

export const createStudentController = async (req, res) => {
  try {
    const student = await createStudent(req.body)
    res.status(201).json(student)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

export const updateStudentController = async (req, res) => {
  const student = await updateStudent(parseInt(req.params.id), req.body);
  res.status(200).json(student);
};

export const deleteStudentController = async (req, res) => {
  const student = await deleteStudent(parseInt(req.params.id));
  res.status(200).json(student);
};