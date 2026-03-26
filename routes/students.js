import express from "express"
import { getStudents } from "../controllers/studentsControllers.js"

const router = express.Router()

router.get("/students", getStudents)

export default router