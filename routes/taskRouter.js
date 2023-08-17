const express=require('express');
const taskController= require('../controllers/taskController')
const router=express.Router()

router.get('/',taskController.getAlltasks);

router.get('/:id',taskController.getTask);
router.post('/',taskController.createTask);

router.patch('/:id',taskController.updateTask);

router.delete('/:id',taskController.deleteTask);

module.exports=router;