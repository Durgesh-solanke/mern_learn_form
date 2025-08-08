import mongoose from "mongoose";
import express from "express"
import bodyParser from "body-parser";
const app = express();
import cors from "cors"

app.use(cors())

import route from "./routes/userRoutes.js";

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/arjun")
    .then(() => {
        console.log("connection success")
    })
    .catch((err) => {
        console.log(err)
    })



app.use('/api', route);

app.listen(5000, () => {
    console.log("server is on 5000")
})
