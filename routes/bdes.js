import express from "express"
import {
    getBDEsController,
    getBDEByIdController,
    createBDEController,
    updateBDEController,
    deleteBDEController,
} from "../controllers/bdeControllers.js"
import { authCheck } from "../middleware/auth-middleware.js"
import { validateBDE } from "../middleware/auth-BDE.js"

const router = express.Router()

router.get("/bde", authCheck, getBDEsController)
router.get("/bde/:id", authCheck, getBDEByIdController)
router.post("/bde", authCheck, validateBDE, createBDEController)
router.put("/bde/:id", authCheck, updateBDEController)
router.delete("/bde/:id", authCheck, deleteBDEController)

export default router
