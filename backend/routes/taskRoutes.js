import express from "express";

import {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/taskControllers.js";

const router = express.Router();

router.route("/").post(createTask).get(getTask);

router.route("/:id").put(updateTask).delete(deleteTask);

export default router;
