import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    address:String,
    identity:{
        type: String,
        required: true
    },
    dob:Date,
    isDeleted:{
        type: Boolean,
        default: false
    },
    role:String

});

const UserModel = mongoose.model('teachers',userSchema);

export default UserModel;