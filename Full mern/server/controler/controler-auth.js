const User = require("../model/User_models")
const bcrypt = require('bcryptjs');

//  .....Home  logicks ......
const home = async (req, res) => {
    try {
        res.status(200).send('Hello Wellcome  to my home  router ')
    } catch (error) {
        console.log(error)
    }
}

//  .....Register logicks ......
const register = async (req, res) => {
    try {
        console.log(req.body)
        const { username, email, password, phone } = req.body
        const userExaist = await User.findOne({ email })

        if (userExaist) {
            return res.status(400).json({ msg: 'email already exists' });
        }
        const userCreated = await User.create({
            username,
            email,
            phone,
            password
        })

        res.status(201).send({
            msg: "regrestation successfull", 
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        })
    } catch (error) {
        // res.status(500).send({ msg: "page not found " })
        next(error)
    }
}



//  .....login ligick ......

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const userExists = await User.findOne({ email });

        // Check if the user exists
        if (!userExists) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // Compare the provided password with the hashed password in the database
        const user= await userExists.comparePassword(password);


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
        console.error(error);
        res.status(500).send({ msg: "Internal server error" });
    }
}






//  .....login logicks ......
// const login = async (req, res) => {
//     try {
//         const {  email, password } = req.body
//         const userExists= await  User.findOne({email})
//         console.log(userExists);

//         if (!userExists ) {
//             return  res.status(400).json({messege:"Invalid Credential "})
//         }

//         const user= await  bcrypt.compare(password,userExists.password)

//           if (user) {
//             res.status(200).send({ msg: "Login successfull", token: await userExists.generateToken (),
//                 userId: userExists._id.toString()
//             })
//           }else{
//             res.status(401).json({messege:"Invalid email or password  "})
//           }



//     } catch (error) {
//         res.status(500).send({ msg: "page not found " })
//     }
// }







//  check 
// const create = async (req, res) => {
//   try {
//     console.log(req.body)
//     res.status(200).send(req.body)
//   } catch (error) {
//     res.status(400).send({ msg: " create  not found " })
//   }

// }


module.exports = { home, register, login }