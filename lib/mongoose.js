import mongoose from "mongoose"

let initialized = false

export const connect = async () => {
    mongoose.set('strictQuery', true);

    if(initialized) {
        console.log("MongodbConnected")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"Next Auth app",
            userNewUrlParser:true,
            userUnifiedTopology:true
        });
        console.log("MongoDb Connected")
        initialized:true
    } catch (error) {
        console.log(error)
    }
}