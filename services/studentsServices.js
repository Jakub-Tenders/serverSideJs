import Student from "../models/students.js"
import bcrypt from "bcrypt"

const SALT_ROUNDS = 10

export const getAllStudents = async () => {
  return await Student.find(); 
};

export const getStudentById = (id) => {
  return Student.findById(id)
};

export const createStudent = async (newStudent) => {
  

  const hashedPassword = await bcrypt.hash(newStudent.password, SALT_ROUNDS)
  return  Student.create({ ...newStudent, password: hashedPassword })
};

export const loginStudent = async (email, password) => {
  const user = await Student.findOne({ email })
  if (!user) throw new Error("Invalid email")
  const match = await bcrypt.compare(password, user.password)
  if (!match) throw new Error("Invalid password")
  return user
};

export const updateStudent = async (id, updatedStudent) => {
  if (updatedStudent.password) {
    updatedStudent.password = await bcrypt.hash(updatedStudent.password, SALT_ROUNDS)
  }
  return await Student.findByIdAndUpdate(id, updatedStudent, { new: true })
};

export const deleteStudent =  (id) => {
  return Student.findByIdAndDelete(id)
};
