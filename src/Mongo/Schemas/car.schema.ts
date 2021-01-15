import { Schema } from "mongoose";
import { CarModelSchema } from "./carModel.schema";

export const CarSchema = new Schema ({
    assembler: String,
    carModel: [CarModelSchema],
})