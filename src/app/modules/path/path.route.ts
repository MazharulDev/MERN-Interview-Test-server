import express from "express";
import { PathController } from "./path.controller";
const router = express.Router();

router.post("/", PathController.createPath);

export const PathRoutes = router;
