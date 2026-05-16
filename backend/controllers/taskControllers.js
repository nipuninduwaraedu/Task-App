import "../models/task.js";

const createTask = async (req, res) => {
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

