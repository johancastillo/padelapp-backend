import { Schema } from "mongoose";

export const userSchema = new Schema({
    fullname: {type:  String, require: true},
    name: String,
    email: String,
    password: String,
    phone: String,
    category: String,
    status: {
        type: String,
        default: "pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

