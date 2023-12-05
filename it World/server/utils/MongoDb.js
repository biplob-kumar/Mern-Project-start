
const mongoose = require('mongoose');
const URI = process.env.MONGODB_URL

const ConnectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log(" [MongoDb] Cunnection successfully ")
    } catch (error) {
        console.log(" [MongoDb] Databse connection Faild! ")
        process.exit(0)
    }
}

module.exports = ConnectDb;