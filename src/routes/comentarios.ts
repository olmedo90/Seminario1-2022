import { Router } from "express";
import { comentController } from "../controllers/comentController";
const router: Router = Router();
router.get('/', comentController.index)
export default router;