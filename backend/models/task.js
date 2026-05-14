import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    titel: {
      type: String,
      required: true,
    },
  },
  {
    timstamps: true,
  },
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
