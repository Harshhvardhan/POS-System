const  mongoose = require('mongoose')
require('colors')

//connectDB fns

const connectDb = async () => {
    try{
        const conn =await mongoose.connect(process.env.MONGO_URL);
        console.groupCollapsed(`MongoDb Connected ${conn.connection.host}` .bgYellow);
    }
    catch(error){
        console.log(`Error: ${error.message}`.bgBlue);
        process.exit(1);
    }
}


//export
module.exports = connectDb;