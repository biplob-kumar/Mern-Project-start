
const mongoose = require('mongoose');
const { Schema, model } = mongoose
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs');
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },

    Phone: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

})


//  secure password with bysrupt js 
userSchema.pre('save', async function (next) {
    console.log("pre method", this)
    const user = this;

    if (!user.isModified('password')) {
        nest()
    }

    try {
        //  hash password 
        const saltround = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltround)
        user.password = hash_password;
    } catch (error) {
        next(error)
    }
})

// compare the password
userSchema.methods.comparePassword=  async function (password){
    return  bcrypt.compare(password, this.password);
}



// json webtoken 
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({

            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d",
            }
        );
    } catch (error) {
        console.error(error)
    }

}


//   define the model cullection name 
const User = model('User', userSchema)

module.exports = User