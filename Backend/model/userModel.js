import mongoose from "mongoose";

const userScheama = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userScheama)

export default User;