import { Schema } from "mongoose";

export const CarModelSchema = new Schema ({
    name: String,
    year: Number,
    motorPower: String
})