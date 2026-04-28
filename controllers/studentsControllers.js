import jwt from "jsonwebtoken";
import { 
  getAllStudents, 
  getStudentById, 
  createStudent, 
  updateStudent, 
  deleteStudent, 
  loginStudent
} from "../services/studentsServices.js"
import student from "../models/students.js";

export const getStudents = async (req, res) => {
  try {
    const students = await getAllStudents();
    const toStudentDTO = (student) => ({
      id: student._id,
      name: student.name,
      email: student.email,
      major: student.major,
      gpa: student.gpa,
    });
    const studentDTO = students.map(toStudentDTO);
    res.status(200).json(studentDTO);
  } catch (error) {
    res.status(404).json({message: error.message})
  }
  
};

export const getStudentByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await getStudentById(id);
    console.log(student);
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({message: "Student does not exist"});
    return;
  }
};

export const createStudentController = async (req, res) => {
  try {
    const {name, email, password, gpa, major} = req.body;
    const newStudent = {name, email, password, gpa, major};
    const User = await createStudent(newStudent);
    const token = jwt.sign({id:User._id}, process.env.JWT_SECRET, {
      expiresIn : "1h",
    });
    const toStudentDTO = (student) => ({
      id: student._id,
      email: student.email,
    });
    res.status(201).json({token, user: toStudentDTO(User)});
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

export const updateStudentController = async (req, res) => {
  try {
  const udated = await updateStudent(parseInt(req.params.id), req.body);
  res.status(200).json(udated);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};

export const deleteStudentController = async (req, res) => {
  try {
  const student = await deleteStudent(parseInt(req.params.id));
  res.status(200).json({message: "student deleted succesfully"});
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

export const loginStudentController = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await loginStudent(email, password);
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({token, user: {id: user._id, email: user.email}});
  } catch (error) {
    res.status(401).json({ message: error.message});
  }
}
