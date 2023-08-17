const mongoose=require('mongoose');

// Task schema definition
const TaskSchema = new mongoose.Schema({
    name:String,
    completed:Boolean,
});

// models definition is a class definition with which we construct documents
// interface with the db
module.exports=mongoose.model('Task', TaskSchema);