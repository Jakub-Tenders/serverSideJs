import { getAllStudents } from "../services/studentsServices.js"

export function getStudents(req, res) {
  res.json(getAllStudents())
}