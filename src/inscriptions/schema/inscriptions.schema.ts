import { Schema } from "mongoose";

export const inscriptionsSchema = new Schema({
    event_id: String,
    team_id: String,
    status: String,
    capture_pay: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})
