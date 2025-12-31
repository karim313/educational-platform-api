import mongoose, { Schema, Document } from 'mongoose';

export interface IWishlist extends Document {
    user: mongoose.Types.ObjectId;
    course: mongoose.Types.ObjectId;
}

const WishlistSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    },
    { timestamps: true }
);

WishlistSchema.index({ user: 1, course: 1 }, { unique: true });

export default mongoose.model<IWishlist>('Wishlist', WishlistSchema);
