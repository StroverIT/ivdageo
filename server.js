import dotenv from 'dotenv'
dotenv.config()

import express from "express";
import path from "path"

import mongoose from "mongoose";

const app = express()
const port = process.env.PORT || 8080
const __dirname = path.resolve();
// const hostname = "0.0.0.0" || "localhost"

const db = mongoose.connection

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use(express.static(__dirname + "/public"))

// Pages
app.get("/", (req,res)=>{
  res.render(path.resolve("views/index.ejs"))
})

db.on("error", (error)=> console.log(error))
db.once("open", ()=> console.log("Connected to Mongoose"))

mongoose.connect(process.env.MONGO_HOST,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
  app.listen(port, "0.0.0.0", ()=>{
    console.log(`Server running at http://localhost:${port}`)
  })
})
.catch((error)=>{
  console.log(error)
})