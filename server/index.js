import express from "express";
import dotenv from "dotenv";
import connection from "./connection/connection.config";
import quizRoute from "./routes/quiz.routes.js";
import authRoute from "./routes/auth.routes.js";
import cors from "cors";
dotenv.config;

const app=express();
const port=process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(authRoute);
app.use(quizRoute);

app.get("/",(req,res)=>{
    res.send("Hello World");
});

connection(app,port);  