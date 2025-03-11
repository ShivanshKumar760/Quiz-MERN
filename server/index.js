import express from "express";
import dotenv from "dotenv";
import connection from "./connection/connection.config";
dotenv.config;

const app=express();
const port=process.env.PORT;



connection(app,port);