import express from "express";
import ExameController from '../controller/ExameController.js'

const router = express.Router();

router
    .get("/exames", ExameController.getAll)
    .post("/exames", ExameController.create)
    .put("/exames/:id", ExameController.update)
    .delete("/exames/:id", ExameController.delete)

export default router;