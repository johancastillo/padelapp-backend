import { Schema } from "mongoose";

export const userSchema = new Schema({
    fullname: {type:  String, require: true},
    username: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

