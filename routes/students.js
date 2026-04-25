import express from "express"
import {
    createStudentController,
    deleteStudentController, 
    getStudentByIdController, 
    getStudents, 
    updateStudentController,
    loginStudentController
} from "../controllers/studentsControllers.js"

const router = express.Router()


// GET all students
router.get('/students', getStudents)

// GET a single student by ID
router.get('/students/:id', getStudentByIdController)

// POST — create a new student
router.post('/students', createStudentController)

// PUT — update a student by ID
router.put('/students/:id', updateStudentController)

// DELETE — remove a student by ID
router.delete('/students/:id', deleteStudentController)

router.post('/students/login', loginStudentController)

export default router