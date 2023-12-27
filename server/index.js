import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import foodroutes from "./routes/food.js"

   
const app = express();
app.use(express.json()); // by this we can send json data in header file

app.use(cors());

app.use("/food", foodroutes);

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))


 const url ="mongodb://127.0.0.1/memories"
 const port = process.env.PORT || 5000
 mongoose.connect(url).then(()=>{
    app.listen(port, async()=>{
        console.log(`"Connected to mongo sucessfully on port " + ${port}`)
       
    });
 }).catch((error)=>{
    console.log(error)
 })

