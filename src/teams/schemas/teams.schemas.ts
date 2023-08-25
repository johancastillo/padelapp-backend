import { Schema } from "mongoose";

export const teamsSchema = new Schema({
    name: String,
    player_one_id: String,
    player_two_id: String,
    status: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

