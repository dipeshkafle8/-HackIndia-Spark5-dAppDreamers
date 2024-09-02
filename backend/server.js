const express=require('express');
const cors=require('cors');
const {route}=require('./routes/routes');
const { connectMongo } = require('./connection');
const port=8001;
const app=express();
let url="mongodb+srv://dipesh1478be22:r5gQ3NYw6sG5dcwo@users.pfknu.mongodb.net/?retryWrites=true&w=majority&appName=users";

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