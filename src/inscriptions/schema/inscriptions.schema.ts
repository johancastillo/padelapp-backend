import { Schema } from "mongoose";

export const inscriptionsSchema = new Schema({
    event_id: String,
    team_id: String,
    status: {
        type: String,
        default: "pending"
    },
    capture_pay: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})
