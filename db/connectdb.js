const mongoose=require('mongoose');

const options={
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true,
}
const connectDB=(url)=>{
    
    return mongoose.connect(url,options);
}

module.exports=connectDB;