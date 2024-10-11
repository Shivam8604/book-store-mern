import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from "./route/book.route"

const app = express();
dotenv.config()
const PORT = process.env.PORT || 3600;
const URI = process.env.MongoDBURI;

// Connect to MongoDB

try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    console.log("Connected to mongoDB")
}
catch(error){
    console.log("Error:",error)
}

// definig route 

app.use("/book",bookRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on port No. ${PORT}`)
});