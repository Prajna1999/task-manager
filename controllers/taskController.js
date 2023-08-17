const Task=require('../models/Task');

const taskController = {
    
    getAlltasks: (req, res) => {
        const tasks=["alltasks"];

        res.status(200).json(tasks)
    },
    getTask: (req, res) => {
        const {id}=req.params

        res.status(200).json({id:id})
    },

    createTask:async(req, res) => {
        const task=await Task.create(req.body);
        res.status(201).json({task})
    },

    updateTask: (req, res) => {
        res.send('UPDATE one task')
    },

    deleteTask: (req, res) => {
        res.send('DELETE one task')
    }
}

module.exports=taskController