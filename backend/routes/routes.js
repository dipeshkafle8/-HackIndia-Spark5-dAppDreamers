const express=require("express");
const{SignUp,Login}=require('../controllers/signup');
const route=express.Router();

route.get("/",(req,res)=>{
    res.send("Hello User!");
})

route.post("/register",SignUp);
route.post("/login",Login);

module.exports={
    route
}