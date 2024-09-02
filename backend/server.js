const express=require('express');
const cors=require('cors');
const {route}=require('./routes/routes');
const { connectMongo } = require('./connection');
const port=8001;
require('dotenv').config();
const app=express();
let url=process.env.Mong_url;

connectMongo(url)
.then(()=>{
    console.log("Database Connected Successfully");
})

app.use(express.json());
app.use(cors());


app.use("/",route);

app.listen(port,()=>{
    
console.log("Server running successfully");
})