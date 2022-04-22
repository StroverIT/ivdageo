import dotenv from 'dotenv'
dotenv.config()

import express from "express";
import path from "path"


const app = express()
const port = process.env.PORT || 8080
const __dirname = path.resolve();

// Routes
import {auth} from "./routes/auth.js"

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use(express.static(__dirname + "/public"))

// Pages
app.get("/", (req,res)=>{
  res.render(path.resolve("views/index.ejs"))
})
app.use("/account", auth)


  app.listen(port, "0.0.0.0", ()=>{
    console.log(`Server running at http://localhost:${port}`)
  })
