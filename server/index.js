const express = require("express");
const dotenv  = require("dotenv");
const mongoose = require('mongoose');
const bookRoute = require("./route/book.route");
const cors = require("cors");
const userRouter = require("./route/user.route")


const app = express();

dotenv.config()
app.use(cors());
app.use(express.json())


const PORT = process.env.PORT  || 5200;
const URI = 'mongodb://localhost:27017/bookStore';

// Connect to mongoDB 

try{
    mongoose.connect(URI,{
        useNewUrlParse:true,
        useUnifiedTopology:true,

    })
    console.log("Connected to MongoDB")
}
catch(error){
    console.log("Error:",error)
}

// defining Routes 

app.use("/book",bookRoute)
app.use("/user",userRouter)
app.use("/book",bookRoute)

app.listen(PORT,()=>{
    console.log(`Server is runnig on port No ${PORT}`)
})