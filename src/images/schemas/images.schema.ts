import { Schema } from "mongoose";


export const imagesSchema = new Schema({
    title: String,
    filename: String,
});
