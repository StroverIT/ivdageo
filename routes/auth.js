import express from "express"
import path from "path"

const router = express.Router()
const __dirname = path.resolve();

router.get("/login", (req, res) => {
    res.render(path.resolve("views/auth/login.ejs"))
})
export {router as auth}