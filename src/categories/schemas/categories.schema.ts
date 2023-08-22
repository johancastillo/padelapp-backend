import { Schema } from "mongoose";


export const categoriesSchema =  new Schema({
    title: String,
    players: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})
