import "../models/task.js";
import Task from "../models/task.js";

export const createTask = async (req, res) => {
  try {
    const { titel } = req.body;

    const task = await task.create({
      titel,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res)=>{
  try {
    const tasks = await Task.find();

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateTask = async (req, res)=>{
  try {
    const task = await Task.findById(req.parms.id);

    if(!task){
      return res.status(404).json({
        message: "Task not found",
      });
    }

    task.title =req.body.title || task.title;

    const updateTask = await task.save();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteTask = async (req, res)=>{
  try {
    const task = await task.findById(req.parms.id);

    if(!task){
      return res.status(404).json({
        message: "Task not found",
      });
    }
    
    await task.deleteOne();

    res.json({
      message:"Task deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};