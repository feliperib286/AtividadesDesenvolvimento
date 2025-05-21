import { Router } from "express";
import { last, byNumber } from "../controllers/MegaControllers";

const router = Router();

// 🔥 Retorna o concurso mais recente da Mega-Sena
router.get("/concurso/mais-recente", last);

// 🔢 Retorna um concurso específico pelo número
router.get("/concurso/:numero", byNumber);

export default router;
