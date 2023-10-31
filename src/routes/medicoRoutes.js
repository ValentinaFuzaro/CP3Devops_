import express from "express";
import MedicoController from '../controller/MedicoController.js'

const router = express.Router();

router
    .get("/medicos", MedicoController.getAll)
    .post("/medicos", MedicoController.create)
    .put("/medicos/:id", MedicoController.update)
    .delete("/medicos/:id", MedicoController.delete)

export default router;