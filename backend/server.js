import express from "express"
import dotenv from "dotenv"
// const express=require('express');
// const dotenv=require('dotenv');

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


import connectToMongoDb from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js"

// const app=express();
const PORT=process.env.PORT||5000;

dotenv.config();

app.use(express.json()); //to parse the incoming requests with Json payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

// app.get("/",(req,res)=>{
//     console.log("Hello World!")
// });
// app.get("/api/auth/signup",(req,res)=>{
//     console.log("signup route")
// });
// app.get("/api/auth/login",(req,res)=>{
//     console.log("login route")
// });
// app.get("/api/auth/logout",(req,res)=>{
//     console.log("logout route")
// });

server.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server Running on port ${PORT}`)
});