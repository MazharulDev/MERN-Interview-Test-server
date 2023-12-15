import express from "express";

import { PathRoutes } from "../modules/path/path.route";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/path",
    route: PathRoutes,
  },
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
