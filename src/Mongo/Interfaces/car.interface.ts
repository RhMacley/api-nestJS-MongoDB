import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Car extends Document {
    readonly _id : mongoose.Schema.Types.ObjectId;
    readonly assembler: string,
    readonly carModel: object
}