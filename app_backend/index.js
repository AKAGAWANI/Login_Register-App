import Express from 'express'
import cors from 'cors'
import mongoose, { model } from 'mongoose'
const app=Express()
app.use(Express.json())
app.use(Express.urlencoded())
app.use(cors())
// app.use('/',route)

mongoose.connect("mongodb+srv://group15_project:EDHBqxqKYJaki5EJ@cluster0.i9alz.mongodb.net/akaaDB",{useNewUrlParser:true,
useUnifiedTopology:true
},()=>{
    console.log("DB connected")}
    )

const userSchema=new mongoose.Schema({
name:String,
email:String,
password:String
}
,{timeStamp:true})
const User=new mongoose.model("User",userSchema)

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email,password:password},(err,user1)=>{
        if(user1){res.status(200).send({msg:"login successful",data:user1})}
    
    else{
        res.status(401).send({msg:"credentail does not match"})
    }
        
        
    })
})
app.post('/register', (req,res)=>{
    const {name,email,password}=req.body
    User.findOne({email:email},(err,user1)=>{
        if(user1){res.status(409).send({msg:"email already exist"})}
    
    else{

        const user= new User({name,email,password}).save (err=>{
            if(err){console.log("notdone")
                     res.status(500).send(err)}
            else{console.log("done")
                res.status(201).send({msg:"user created",data:user})}
        })
    }
        
        
    })
    // console.log(req.body);
})

app.listen(9002,()=>{
    console.log("server started at 9002");
})