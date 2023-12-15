import express from "express";
import { PathController } from "./path.controller";
const router = express.Router();

router.post("/", PathController.createPath);
router.get("/", PathController.getAllPath);

export const PathRoutes = router;
