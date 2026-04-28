import express from "express"
import {
    createStudentController,
    deleteStudentController, 
    getStudentByIdController, 
    getStudents, 
    updateStudentController,
    loginStudentController
} from "../controllers/studentsControllers.js"
import { validate } from "../middleware/authStudent.js"
import { authCheck } from "../middleware/auth-middleware.js"

const router = express.Router()


// GET all students
router.get('/students', authCheck, getStudents)

// GET a single student by ID
router.get('/students/:id', authCheck, getStudentByIdController)

// POST — create a new student
router.post('/students', validate, createStudentController)

// PUT — update a student by ID
router.put('/students/:id', authCheck, updateStudentController)

// DELETE — remove a student by ID
router.delete('/students/:id', authCheck, deleteStudentController)

router.post('/students/login', loginStudentController)

export default router