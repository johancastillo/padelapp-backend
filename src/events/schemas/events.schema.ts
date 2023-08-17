import { Schema } from "mongoose";

export const eventsSchema = new Schema({
    title: {type:  String, require: true},
    creator: String,
    price: String,
    address: String,
    category: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

