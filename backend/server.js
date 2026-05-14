import express from "express";
import mongoose from  "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("API running")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
});