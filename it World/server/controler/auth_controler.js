
const User = require("../models/user_models")
// const bcrypt=require("bcryptjs")

// Home logicks 
const home = async (req, res) => {

    try {
        res.status(200).send('Wecome to my it world ')
    } catch (error) {
        console.log(error)
    }
}

//  register logicks 

const rgister = async (req, res) => {

    try {
        console.log(req.body)
        const { username, email, phone, password } = req.body

        const userExist = await User.findOne({ email })

        if (userExist) {
            return res.status(400).json({ msg: "Email Allready Exists " })
        }

        // hash the password
        const usercreated = await User.create({
            username,
            email,
            phone,
            password,
        })

        res.status(201).send({
            msg: "Regestration Successfull", token: await usercreated.generateToken(), userId: usercreated._id.toString(),
        })
    } catch (error) {
        // res.status(500).send(" Internal server error  ")

               // eror handeling  code 
               next(error)
    }
}







//  Login  logicks 

const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email })
        console.log(userExists)
        if (!userExists) {
            return res.status(400).json({ message: "invalid credential " })
        }

        // Compare the provided password with the hashed password in the database

        const user = await userExists.comparePassword(password);

        if (user) {
            res.status(200).send({
                msg: "Login successful",
                token: await userExists.generateToken(),
                userId: userExists._id.toString()
            });
        } else {
            res.status(401).json({ message: "Invalid Email or Password" });
        }


    } catch (error) {
        res.status(500).json(" Internal server error  ")

 
    }


}



module.exports = {
    home, rgister, login
}