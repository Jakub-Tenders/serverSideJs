import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    major: String,
    gpa: Number
})

export default mongoose.model("Student", studentSchema)