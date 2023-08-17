const Task = require("../models/Task");
const asyncWrapper = require("../middlewares/async");
const {createCustomError}=require('../errors/custom-error');
const taskController = {
  getAlltasks: asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  }),
  getTask: asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findById({ _id: taskID });

    if (!task) {
        // return next(createCustomError(`No task with id ${taskID}`));
      return res.status(404).json({ msg: "No task found " });
    }
    res.status(201).json({ task });
  }),

  createTask: asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  }),

  updateTask: asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ task: task });
  }),

  deleteTask: asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next(createCustomError(`No task with id ${taskID}`));
    }

    res.status(200).send();
  }),
};

module.exports = taskController;
