import { Document } from "mongoose";

export interface User extends Document{
    readonly fullname: String,
    readonly username: String,
    readonly password: String,
    readonly createdAt: Date,
}