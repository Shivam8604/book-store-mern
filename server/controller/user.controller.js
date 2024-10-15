const User = require("../model/user.model")

const signup = async(req,res)=>{
    try{
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({massage:"User Already exists"})
        }

        const createdUser = new User({
            fullname,
            email,
            password
        })

       await createdUser.save()
        res.status(201).json({message:"User created Successfully"})

    }
    catch(error){
        console.log("Error:" + error.massage);
        res.status(500).json({massage:"Internal server error"})
    }
}

module.exports = signup