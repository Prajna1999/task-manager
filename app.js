const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const helmet=require('helmet')
// import routes from './routes
//later use barrel fetch
const taskRouter=require('./routes/taskRouter')
// import the db connection
const connectDB=require('./db/connectdb');
require('dotenv').config()

const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-handler');


// serve the static files


const app=express()
// app.use(helmet());
app.use(cors(
    {
        methods:"GET, POST, PUT, DELETE, HEAD, OPTIONS",
       
    }
))
app.use(express.static('./public'))
// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// app.use(express.json())
// routes
app.get('/',(req,res)=>{
    res.send('Hello World from task manager');
});

app.use('/api/v1/tasks', taskRouter);

// error handlers
app.use(notFound);
app.use(errorHandler);

// catch the router not found error a
app.use((req,res,next)=>{
    res.status(404).json({
        error:true,
        message:'Route not found'
    })
})

const port=process.env.PORT||5000   

// wrap the db connection with the PORT connection in a start function
const start=async()=>{
    try{
        const db=await connectDB(process.env.MONGO_URI)
        if(!db){
            console.log('DB Connection not established');
            return
        }
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`)
        })
    }catch(e){
        console.log(error)
    }
}

start();

