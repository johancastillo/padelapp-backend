import { Schema } from "mongoose";

export const inscriptionsSchema = new Schema({
    player: String,
    status: String,
    event: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})
