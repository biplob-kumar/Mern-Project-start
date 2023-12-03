
const mongoose = require('mongoose');
const URI= 'mongodb://localhost:27017/Mern-stack'
// mongoose.connect(URI);

const  ConnectDb= async(req,res)=>{

try {
     await mongoose.connect(URI)
     console.log(' [MongoDb] Connection sucessfull ')
} catch (error) {
    
    console.log('databse Connection faild  [MongoDb ]')
    process.exit(0)
}


}

module.exports=ConnectDb