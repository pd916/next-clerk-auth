import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    clerkId:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true
    },
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:Stringm,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    avatar:{
        type:string,
        require:true
    }
},{timestamps:true})

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User;