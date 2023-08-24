import { Schema } from "mongoose"

export const resultsSchema = new Schema({
    event_id: String,
    losers: Array,
    winners: Array,
    points: Array
})

