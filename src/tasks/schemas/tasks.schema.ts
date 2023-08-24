import { Schema } from "mongoose";

export const tasksSchema = new Schema({
    title: String,
    status: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

