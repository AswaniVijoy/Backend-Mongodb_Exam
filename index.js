import express, { json } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { admin } from './routes/adminroute.js';
import { user } from './routes/userroute.js';

dotenv.config()

const app=express();
app.use(json())
app.use("/admin",admin)
app.use("/user",user)

const MONGO_URI=process.env.MONGO_URI || "mongodb://127.0.0.1:27017/moviedb"

mongoose.connect(MONGO_URI)
.then(()=>console.log("MONGODB Connected"))
.catch(err=>console.log(err))

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
console.log(`Server is running at port ${PORT}`);

})