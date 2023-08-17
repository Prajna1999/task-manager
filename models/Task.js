const mongoose=require('mongoose');

// Task schema definition
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'must provide a name'],
        trim:true,
        maxLength: [20, 'Name cannot exceed 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    },
});

// models definition is a class definition with which we construct documents
// interface with the db
// Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.
module.exports=mongoose.model('Task', TaskSchema);