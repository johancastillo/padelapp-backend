import { Schema } from "mongoose";


export const articlesSchema = new Schema({
    title: String,
    cover: String,
    description: String,
    resumen: String,
    author: String,
    photos: Array,
    banner: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})