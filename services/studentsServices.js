import students from "../students.json" with { type: "json" }

export function getAllStudents() {
  return students
}