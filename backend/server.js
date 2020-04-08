const express= require('express');
const cors=require('cors');
const mongoose=require('mongoose');

require('dotenv').config();

const app=new express();
const port =process.env.PORT||5000;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;

mongoose.connect("mongodb://localhost/Shop",{useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfuly")
})


const userRouter=require('./routes/userRouter')
app.use('/users',userRouter)
const goodsRouter=require('./routes/goodsRouter')
app.use('/goods',goodsRouter)


app.listen(port,()=>{
    console.log(`Server is runnig on port ${port}`)
})