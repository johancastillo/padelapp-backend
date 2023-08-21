import { Schema } from "mongoose";

export const sponsorsSchema = new Schema({
    name: String,
    image: String,
    description: String,
    website: String,
    instagram: String,
    facebook: String,
    tiktok: String,
})