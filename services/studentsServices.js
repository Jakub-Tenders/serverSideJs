import Student from "../models/student.js"

export const getAllStudents = async () => {
  return await Student.find()
}

export const getStudentById = async (id) => {
  return await Student.findById(id)
}

export const createStudent = async (newStudent) => {
  console.log(newStudent)
  if (!newStudent.name) throw new Error( "name needed");
  if (!newStudent.email) throw new Error( "email needed");
  if (!newStudent.gpa) throw new Error( "gpa needed");
  if (!newStudent.major) throw new Error( "major needed");
  
  const student = new Student(newStudent)
  return await student.save()
}

export const updateStudent = async (id, updatedStudent) => {
  return await Student.findByIdAndUpdate(id, updatedStudent, { new: true })
}

export const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id)
}