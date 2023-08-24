import { Schema } from "mongoose";


export const rankingSchema = new Schema({
    fullname: String,
    position: Number,
    category: String,
    gender: String
})
