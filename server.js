const express= require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const path=require("path")

const app=new express();
//BODY-PARSER Middleware
app.use(bodyParser.json())


require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;

mongoose.connect("mongodb://localhost/Shop",{useNewUrlParser:true,useCreateIndex:true})
.then(()=>console.log("MongoDB database connection established successfulsy"))
.catch(err=>console.log(err))
const port =process.env.PORT||5001;
app.listen(port,()=>console.log(`Server started on ${port}`));

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
const userRouter=require('./routes/userRouter')
app.use('/users',userRouter)
const goodsRouter=require('./routes/goodsRouter')
app.use('/goods',goodsRouter)

