import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
    user: mongoose.Types.ObjectId;
    course: mongoose.Types.ObjectId;
    rating: number;
    comment: string;
}

const ReviewSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String, required: true },
    },
    { timestamps: true }
);

ReviewSchema.index({ user: 1, course: 1 }, { unique: true });

export default mongoose.model<IReview>('Review', ReviewSchema);
