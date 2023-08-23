import { Document } from "mongoose";


export interface Images extends Document{
    title: string;
    filename: string;
}
