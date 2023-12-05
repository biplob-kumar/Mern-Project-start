const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requre: true,
    },
    email: {
        type: String,
        requre: true,
    },
    phone: {
        type: String,
        requre: true,
    },
    password: {
        type: String,
        requre: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },

})

//? secure the password with the bcrypt
userSchema.pre("save", async function (next) {
    const user = this;
    console.log("actual data ", this);

    if (!user.isModified("password")) {
        next()
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashe_password = await bcrypt.hash(user.password, saltRound);
        user.password = hashe_password
    } catch (error) {
        next(error);
    }
});

//  compare the password 
userSchema.methods.comparePassword = async function (password) {

    return bcrypt.compare(password, this.password);
}

//  json webtoken 
userSchema.methods.generateToken = async function () {

    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d"
            }
        );
    } catch (error) {
        console.error(error)
    }

}


// defile model cullectio name 
const User = new mongoose.model("User", userSchema)
module.exports = User