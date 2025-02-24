import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import route from './routes/userRoute.js'

const app = express();

app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
  console.log("Database connected Successful");
  app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
  })
})
.catch((error)=>console.log("Error",error));


app.use("/api/user", route)