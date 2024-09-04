import User from "../models/user.model"
import {connect} from "../mongodb/mongoose"

export const createOrUpdateUser = async (
    id,
    first_name,
    last_name,
    image_url,
    email_addresses,
    username
) => {
    try {

        await connect()
        
        const user  = await User.findOneAndUpdate(
            {clerkId: id},
            {
            $set: {
                firstName:first_name,
                lastName:last_name,
                email:email_addresses[0].email,
                avatar:image_url,
                username:username
            }
        }, {new:true, upset: true}
    );
    return user;
} catch (error) {
    console.log(error)
}
};


export const deleteUser = async () => {
    try {
        await connect()
        await User.findOneAndDelete({clerkId:id})
    }catch(error){
        console.log(error)
    }
}
